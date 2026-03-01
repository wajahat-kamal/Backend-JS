import http from "node:http"
import { serveStatic } from "./utils/serveStatic.js";
import { getData } from "./utils/getData.js";

const PORT = 8000
const __dirname = import.meta.dirname;


const server = http.createServer(async (req, res) => {
    // if (req.url === "/" && req.method === "GET") {
    console.log(getData);


    await serveStatic(req, res, __dirname)

    // }
})

server.listen(PORT, () => console.log(`Server runing on port: ${PORT}`))
