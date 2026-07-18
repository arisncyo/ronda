export interface ScrapedProduct {
  id: string
  name: string
  source: string
  sourceUrl: string
  category: string
  brand: string
  imageUrl: string
  price: string
  originalPrice: string | null
  description: string
  specs: { label: string; value: string }[]
  active: boolean
  createdAt: string
  updatedAt: string
}

export type ProductStatus = "all" | "active" | "inactive"
