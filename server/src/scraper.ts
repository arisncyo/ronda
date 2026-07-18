import type { ScrapedProduct } from "./types"
import { upsertMany, removeBySource } from "./db"

const BASE_URL = "https://emscctv.com"
const SOURCE = "emscctv"
const TOTAL_PAGES = 39

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
}

function cleanPrice(s: string): string {
  return s.replace(/\.$/, "")
}

function parsePriceBlock(block: string): { price: string; originalPrice: string | null } {
  const currentMatch = block.match(/Current price is:\s*Rp([\d.]+)/)
  if (currentMatch) {
    const origMatch = block.match(/Original price was:\s*Rp([\d.]+)/)
    return {
      price: `Rp${cleanPrice(currentMatch[1])}`,
      originalPrice: origMatch ? `Rp${cleanPrice(origMatch[1])}` : null,
    }
  }

  const insMatch = block.match(/<ins[^>]*>.*?<bdi><span[^>]*>Rp<\/span>([\d.]+?)<\/bdi>/)
  if (insMatch) {
    return { price: `Rp${cleanPrice(insMatch[1])}`, originalPrice: null }
  }

  const bdiMatch = block.match(/<bdi><span[^>]*>Rp<\/span>([\d.]+?)<\/bdi>/)
  if (bdiMatch) {
    return { price: `Rp${cleanPrice(bdiMatch[1])}`, originalPrice: null }
  }

  const fallback = block.match(/Rp([\d.]+?)(?:[^.\d]|$)/)
  if (fallback) {
    return { price: `Rp${cleanPrice(fallback[1])}`, originalPrice: null }
  }

  return { price: "", originalPrice: null }
}

function extractAllText(html: string, before: string, after: string): string[] {
  const results: string[] = []
  let pos = 0
  while (true) {
    const start = html.indexOf(before, pos)
    if (start === -1) break
    const contentStart = start + before.length
    const end = html.indexOf(after, contentStart)
    if (end === -1) break
    results.push(html.slice(contentStart, end).trim())
    pos = end + after.length
  }
  return results
}

interface ListingItem {
  name: string
  url: string
  imageUrl: string
  category: string
  price: string
  originalPrice: string | null
}

function parseListingPage(html: string, page: number): ListingItem[] {
  const items: ListingItem[] = []

  const startMarker = '<div class="product-small col has-hover'
  const endMarker = '<div class="product-small col has-hover'
  let pos = 0

  while (true) {
    const start = html.indexOf(startMarker, pos)
    if (start === -1) break

    const nextStart = html.indexOf(endMarker, start + 1)
    const blockEnd = nextStart === -1 ? html.length : nextStart
    const block = html.slice(start, blockEnd)
    pos = start + 1

    const linkMatch = block.match(/<a[^>]*href="(https:\/\/emscctv\.com\/product\/[^"]+)"[^>]*>/)
    if (!linkMatch) continue
    const url = linkMatch[1]

    const nameMatch = block.match(/woocommerce-loop-product__link">([^<]+)</)
    if (!nameMatch) continue
    const name = nameMatch[1].trim()

    const imgMatch = block.match(/<img[^>]*src="([^"]+)"[^>]*>/)
    const imageUrl = imgMatch ? imgMatch[1] : ""

    const catMatch = block.match(/product-cat op-8">\s*([^<]+)</)
    const category = catMatch ? catMatch[1].trim() : ""

    const { price, originalPrice } = parsePriceBlock(block)

    items.push({ name, url, imageUrl, category, price, originalPrice })
  }

  return items
}

function parseDetailPage(html: string, listing: ListingItem): Partial<ScrapedProduct> {
  let brand = ""
  const brandMatch = html.match(/Brand:\s*<a[^>]*>([^<]+)</)
  if (brandMatch) brand = brandMatch[1].trim()

  const panelMatch = html.match(
    /id="tab-description"[^>]*role="tabpanel"[\s\S]*?<table[\s\S]*?<\/table>/,
  )
  let panelHtml = panelMatch ? panelMatch[0] : ""

  let description = panelHtml
    .replace(/^[^>]*>/, "")
    .replace(/<[^>]+>/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/\s+/g, " ")
    .trim()

  const specs: { label: string; value: string }[] = []
  const specRows = extractAllText(panelHtml, '<tr>', '</tr>')
  for (const row of specRows) {
    const strongMatch = row.match(/<strong>(.*?)<\/strong>/)
    const tds = [...row.matchAll(/<td[^>]*>(.*?)<\/td>/g)]
    if (strongMatch && tds.length >= 2) {
      const label = strongMatch[1].trim()
      const value = tds[1][1].replace(/<[^>]+>/g, "").trim()
      if (label && value) specs.push({
        label: label.replace(/&amp;/g, "&"),
        value: value.replace(/&amp;/g, "&"),
      })
    }
  }

  let category = listing.category
  const breadcrumb = html.match(/<nav[^>]*class="[^"]*woocommerce-breadcrumb[^"]*"[^>]*>([\s\S]*?)<\/nav>/)
  if (breadcrumb) {
    const crumbs = [...breadcrumb[1].matchAll(/<a[^>]*>([^<]+)<\/a>/g)].map((m) => m[1].trim())
    const filtered = crumbs.filter((c) => !["Home", "PRODUCTS & SHOP", "Shop"].includes(c))
    if (filtered.length > 0) category = filtered.join(" > ")
  }

  return {
    brand,
    description: description || listing.category,
    specs,
    category: category || listing.category,
  }
}

export async function scrapeListings(
  onProgress?: (done: number, total: number) => void,
): Promise<ListingItem[]> {
  const allItems: ListingItem[] = []

  for (let page = 1; page <= TOTAL_PAGES; page++) {
    const url = page === 1 ? `${BASE_URL}/products-shop/` : `${BASE_URL}/products-shop/page/${page}/`
    console.log(`[scraper] Fetching page ${page}/${TOTAL_PAGES}...`)

    const res = await fetch(url, {
      headers: { "User-Agent": "Mozilla/5.0 (compatible; RondaBot/1.0)" },
    })

    if (!res.ok) {
      console.warn(`[scraper] Page ${page} failed: ${res.status}`)
      continue
    }

    const html = await res.text()
    const items = parseListingPage(html, page)
    allItems.push(...items)
    onProgress?.(page, TOTAL_PAGES)
  }

  return allItems
}

export async function scrapeDetails(
  items: ListingItem[],
  batchSize = 5,
  onProgress?: (done: number, total: number, current: string) => void,
): Promise<ScrapedProduct[]> {
  const products: ScrapedProduct[] = []
  const now = new Date().toISOString()

  for (let i = 0; i < items.length; i += batchSize) {
    const batch = items.slice(i, i + batchSize)
    const results = await Promise.allSettled(
      batch.map(async (item) => {
        try {
          const res = await fetch(item.url, {
            headers: { "User-Agent": "Mozilla/5.0 (compatible; RondaBot/1.0)" },
          })
          if (!res.ok) throw new Error(`HTTP ${res.status}`)
          const html = await res.text()
          const detail = parseDetailPage(html, item)

          const product: ScrapedProduct = {
            id: slugify(item.name),
            name: item.name,
            source: SOURCE,
            sourceUrl: item.url,
            category: detail.category || item.category,
            brand: detail.brand || "",
            imageUrl: item.imageUrl,
            price: item.price,
            originalPrice: item.originalPrice,
            description: detail.description || "",
            specs: detail.specs || [],
            active: false,
            createdAt: now,
            updatedAt: now,
          }
          return product
        } catch (err) {
          const product: ScrapedProduct = {
            id: slugify(item.name),
            name: item.name,
            source: SOURCE,
            sourceUrl: item.url,
            category: item.category,
            brand: "",
            imageUrl: item.imageUrl,
            price: item.price,
            originalPrice: item.originalPrice,
            description: "",
            specs: [],
            active: false,
            createdAt: now,
            updatedAt: now,
          }
          return product
        }
      }),
    )

    for (const result of results) {
      if (result.status === "fulfilled") {
        products.push(result.value)
      }
    }

    onProgress?.(Math.min(i + batchSize, items.length), items.length, "")
  }

  return products
}

export async function runFullScrape(
  onProgress?: (phase: string, done: number, total: number, current?: string) => void,
): Promise<{ total: number; newCount: number }> {
  onProgress?.("listings", 0, TOTAL_PAGES)
  const items = await scrapeListings((done) => onProgress?.("listings", done, TOTAL_PAGES))
  console.log(`[scraper] Found ${items.length} products in listings`)

  onProgress?.("details", 0, items.length)
  const products = await scrapeDetails(items, 5, (done, total) =>
    onProgress?.("details", done, total),
  )
  console.log(`[scraper] Scraped ${products.length} product details`)

  const before = (await import("./db")).getAll("all").length

  removeBySource(SOURCE)
  upsertMany(products)

  return { total: products.length, newCount: products.length }
}
