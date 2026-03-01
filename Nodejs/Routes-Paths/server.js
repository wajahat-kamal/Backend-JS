import http from "node:http"
import path from "node:path";
import fs from "node:fs/promises";

const PORT = 8000
const __dirname = import.meta.dirname;

const server = http.createServer(async (req, res) => {
    // if (req.url === "/" && req.method === "GET") {

    const filePath = path.join(__dirname, "public", "index.html")

    try {
        const content = await fs.readFile(filePath)
    } catch (error) {
        console.log(error);
    }
    

    res.writeHead(200, { "Content-Type": "text/html" })
    res.end()
    // }
})

server.listen(PORT, () => console.log(`Server runing on port: ${PORT}`))
