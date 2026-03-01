import path from 'node:path'
import fs from 'node:fs/promises'
import { sendResponse } from './sendResponse.js'
import { getContentType } from './getContentType.js'

export async function serveStatic(req, res, baseDir) {

    const filePath = path.join(baseDir, 'public', req.url === "/" ? "index.html" : req.url)

    try {
        const content = await fs.readFile(filePath)
        const ext = path.extname(filePath)
        const contentType = getContentType(ext)
        sendResponse(res, 200, contentType, content)
    } catch (error) {
        if (error.code === "ENOENT") {
            const content = await fs.readFile(path.join(baseDir, "public", "404.html"))
            sendResponse(res, 404, "text/html", content)
        } else {
            const content = `<html><h1>Server Error: ${err.code}</h1></html>`
            sendResponse(res, 500, "text/html", content)
        }
        console.log(error);
    }

}