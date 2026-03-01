import http from "node:http"
import { serveStatic } from "./utils/serveStatic.js";

const PORT = 8000
const __dirname = import.meta.dirname;

const server = http.createServer(async (req, res) => {
    // if (req.url === "/" && req.method === "GET") {

   serveStatic(__dirname)
    // }
})

server.listen(PORT, () => console.log(`Server runing on port: ${PORT}`))
