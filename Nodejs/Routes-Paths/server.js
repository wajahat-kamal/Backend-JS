import http from "node:http"
import { serveStatic } from "./utils/serveStatic.js";
import { sendResponse } from "./utils/sendResponse.js";

const PORT = 8000
const __dirname = import.meta.dirname;

const server = http.createServer(async (req, res) => {
    // if (req.url === "/" && req.method === "GET") {

    const content = await serveStatic(__dirname)
    sendResponse(res, 200, "text/html", content)

    // }
})

server.listen(PORT, () => console.log(`Server runing on port: ${PORT}`))
