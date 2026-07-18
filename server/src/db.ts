import { readFileSync, writeFileSync, existsSync, mkdirSync } from "node:fs"
import { join, dirname } from "node:path"
import { fileURLToPath } from "node:url"
import type { ScrapedProduct, ProductStatus } from "./types"

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const DATA_DIR = join(__dirname, "..", "data")
const DB_PATH = join(DATA_DIR, "products.json")

function ensureDir() {
  if (!existsSync(DATA_DIR)) mkdirSync(DATA_DIR, { recursive: true })
}

function loadAll(): ScrapedProduct[] {
  ensureDir()
  if (!existsSync(DB_PATH)) return []
  return JSON.parse(readFileSync(DB_PATH, "utf-8"))
}

function saveAll(products: ScrapedProduct[]) {
  ensureDir()
  writeFileSync(DB_PATH, JSON.stringify(products, null, 2), "utf-8")
}

export function getAll(status: ProductStatus = "all"): ScrapedProduct[] {
  const all = loadAll()
  if (status === "active") return all.filter((p) => p.active)
  if (status === "inactive") return all.filter((p) => !p.active)
  return all
}

export function getById(id: string): ScrapedProduct | undefined {
  return loadAll().find((p) => p.id === id)
}

export function upsertMany(products: ScrapedProduct[]) {
  const existing = loadAll()
  const map = new Map(existing.map((p) => [p.id, p]))

  for (const p of products) {
    const existingProduct = map.get(p.id)
    if (existingProduct) {
      map.set(p.id, { ...existingProduct, ...p, updatedAt: new Date().toISOString() })
    } else {
      map.set(p.id, p)
    }
  }

  saveAll(Array.from(map.values()))
}

export function updateStatus(id: string, active: boolean): boolean {
  const all = loadAll()
  const idx = all.findIndex((p) => p.id === id)
  if (idx === -1) return false
  all[idx].active = active
  all[idx].updatedAt = new Date().toISOString()
  saveAll(all)
  return true
}

export function updateStatusBatch(ids: string[], active: boolean) {
  const all = loadAll()
  for (const id of ids) {
    const p = all.find((p) => p.id === id)
    if (p) {
      p.active = active
      p.updatedAt = new Date().toISOString()
    }
  }
  saveAll(all)
}

export function getStats() {
  const all = loadAll()
  return {
    total: all.length,
    active: all.filter((p) => p.active).length,
    inactive: all.filter((p) => !p.active).length,
    sources: [...new Set(all.map((p) => p.source))],
  }
}

export function removeBySource(source: string) {
  const all = loadAll()
  const filtered = all.filter((p) => p.source !== source)
  saveAll(filtered)
  return all.length - filtered.length
}
