import { Router, type Request, type Response } from "express"
import { getAll, getById, updateStatus, updateStatusBatch, getStats, removeBySource } from "./db"
import { runFullScrape } from "./scraper"

const router = Router()

router.get("/products", (_req: Request, res: Response) => {
  const status = (_req.query.status as "all" | "active" | "inactive") || "all"
  const products = getAll(status)
  res.json({ data: products, total: products.length })
})

router.get("/products/:id", (req: Request, res: Response) => {
  const product = getById(req.params.id)
  if (!product) {
    res.status(404).json({ error: "Product not found" })
    return
  }
  res.json({ data: product })
})

router.patch("/products/:id/status", (req: Request, res: Response) => {
  const { active } = req.body
  if (typeof active !== "boolean") {
    res.status(400).json({ error: "active must be a boolean" })
    return
  }
  const ok = updateStatus(req.params.id, active)
  if (!ok) {
    res.status(404).json({ error: "Product not found" })
    return
  }
  res.json({ ok: true })
})

router.patch("/products/status/batch", (req: Request, res: Response) => {
  const { ids, active } = req.body
  if (!Array.isArray(ids) || typeof active !== "boolean") {
    res.status(400).json({ error: "ids must be an array, active must be a boolean" })
    return
  }
  updateStatusBatch(ids, active)
  res.json({ ok: true, count: ids.length })
})

router.get("/stats", (_req: Request, res: Response) => {
  res.json({ data: getStats() })
})

router.delete("/products/source/:source", (req: Request, res: Response) => {
  const count = removeBySource(req.params.source)
  res.json({ ok: true, removed: count })
})

router.post("/scrape", async (_req: Request, res: Response) => {
  res.json({ message: "Scraping started", status: "running" })
  ;(async () => {
    try {
      await runFullScrape((phase, done, total) => {
        if (phase === "listings") {
          console.log(`[scrape] Listing pages: ${done}/${total}`)
        } else if (phase === "details") {
          console.log(`[scrape] Detail pages: ${done}/${total}`)
        }
      })
      console.log("[scrape] Complete!")
    } catch (err) {
      console.error("[scrape] Failed:", err)
    }
  })()
})

export default router
