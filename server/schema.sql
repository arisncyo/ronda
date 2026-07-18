-- ============================================
-- Ronda CCTV — Database Schema (Cloudflare D1)
-- SQLite-compatible (D1 uses SQLite dialect)
-- ============================================

-- ============================================
-- MASTER TABLE: scrape_products
-- Menyimpan data master produk (hasil scrape + editan admin)
-- ============================================
CREATE TABLE IF NOT EXISTS scrape_products (
  id            TEXT PRIMARY KEY,              -- slugify(item.name)
  name          TEXT NOT NULL,
  source        TEXT NOT NULL,                 -- "emscctv", "tokopedia", dll
  source_url    TEXT,                          -- URL asli produk scraper
  category      TEXT NOT NULL,
  brand         TEXT NOT NULL DEFAULT '',
  image_url     TEXT NOT NULL DEFAULT '',
  price         TEXT DEFAULT '',
  original_price TEXT,
  active        INTEGER NOT NULL DEFAULT 0,    -- 0=draft, 1=active (boolean)
  created_at    TEXT NOT NULL DEFAULT (datetime('now')),
  updated_at    TEXT NOT NULL DEFAULT (datetime('now'))
);

-- Index untuk query umum
CREATE INDEX IF NOT EXISTS idx_scrape_products_active   ON scrape_products(active);
CREATE INDEX IF NOT EXISTS idx_scrape_products_category ON scrape_products(category);
CREATE INDEX IF NOT EXISTS idx_scrape_products_brand    ON scrape_products(brand);
CREATE INDEX IF NOT EXISTS idx_scrape_products_source   ON scrape_products(source);
CREATE INDEX IF NOT EXISTS idx_scrape_products_created  ON scrape_products(created_at);
