import express from "express"
import routes from "./routes"

const app = express()
const PORT = process.env.PORT || 4000

app.use(express.json())

app.use((_req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Methods", "GET, PATCH, POST, DELETE")
  res.header("Access-Control-Allow-Headers", "Content-Type")
  if (_req.method === "OPTIONS") {
    res.sendStatus(204)
    return
  }
  next()
})

app.use("/api", routes)

app.get("/health", (_req, res) => {
  res.json({ status: "ok", uptime: process.uptime() })
})

app.listen(PORT, () => {
  console.log(`[server] Running on http://localhost:${PORT}`)
})
