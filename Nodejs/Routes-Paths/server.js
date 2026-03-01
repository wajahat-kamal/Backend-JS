import http from "node:http"
import path from "node:path";
import fs from "node:fs/promises";

const PORT = 8000
const __dirname = import.meta.dirname;

const server = http.createServer(async (req, res) => {
    // if (req.url === "/" && req.method === "GET") {

    const filePath = path.join(__dirname, "public", "index.html")
    const content = await fs.readFile(filePath, "utf-8")

    res.writeHead(200, { "Content-Type": "text/html" })
    res.end(content)
    // }
})

server.listen(PORT, () => console.log(`Server runing on port: ${PORT}`))
