const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000"

export interface DisplayProduct {
  id: string
  slug: string
  name: string
  category: string
  brand: string
  description: string
  specs: { label: string; value: string }[]
  imageUrl: string
  price: string
  originalPrice: string | null
  hasPrice: boolean
  source: string
  active: boolean
}

function toDisplay(src: any): DisplayProduct {
  return {
    id: src.id,
    slug: src.id,
    name: src.name,
    category: src.category,
    brand: src.brand,
    description: src.description,
    specs: src.specs || [],
    imageUrl: src.imageUrl || "",
    price: src.price || "",
    originalPrice: src.originalPrice || null,
    hasPrice: !!src.price,
    source: src.source,
    active: src.active,
  }
}

export async function fetchProducts(status: "all" | "active" | "inactive" = "active"): Promise<DisplayProduct[]> {
  try {
    const res = await fetch(`${API_BASE}/api/products?status=${status}`, {
      cache: "no-store",
      signal: AbortSignal.timeout(5000),
    })
    if (!res.ok) return []
    const json = await res.json()
    return (json.data || []).map(toDisplay)
  } catch {
    return []
  }
}

export async function fetchProduct(id: string): Promise<DisplayProduct | null> {
  try {
    const res = await fetch(`${API_BASE}/api/products/${encodeURIComponent(id)}`, {
      cache: "no-store",
      signal: AbortSignal.timeout(5000),
    })
    if (!res.ok) return null
    const json = await res.json()
    return json.data ? toDisplay(json.data) : null
  } catch {
    return null
  }
}

export async function fetchStats(): Promise<{ total: number; active: number; inactive: number; sources: string[] } | null> {
  try {
    const res = await fetch(`${API_BASE}/api/stats`, {
      signal: AbortSignal.timeout(5000),
    })
    if (!res.ok) return null
    const json = await res.json()
    return json.data
  } catch {
    return null
  }
}
