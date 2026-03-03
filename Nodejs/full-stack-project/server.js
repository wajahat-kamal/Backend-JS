import http from "node:http"
import { serveStatic } from "./utils/serveStatic.js";
import { handleGet, handleNews, handlePost } from "./handlers/handlers.js";

const PORT = 8000
const __dirname = import.meta.dirname;

const server = http.createServer(async (req, res) => {
    if (req.url.startsWith("/api/news")) {
        return await handleNews(req, res)
    } else if (req.url.startsWith("/api")) {
        if (req.method === "GET") {
            return handleGet(res)
        } else if (req.method === "POST") {
            return handlePost(req, res)
        }
    } else if (!req.url.startsWith('/api')) {
        return await serveStatic(req, res, __dirname)
    }
})

server.listen(PORT, () => console.log(`Server runing on port: ${PORT}`))
