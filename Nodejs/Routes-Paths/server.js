import http from "node:http"
import path from "node:path";
import fs from "node:fs/promises";
import { sendResponse } from "./utils";

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
    

    sendResponse(res, 200, "text/html", content)
    // }
})

server.listen(PORT, () => console.log(`Server runing on port: ${PORT}`))
