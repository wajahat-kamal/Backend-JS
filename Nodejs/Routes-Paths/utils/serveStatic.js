import path from 'node:path'
import fs from 'node:fs/promises'

export async function serveStatic(baseDir) {

    const filePath = path.join(baseDir, 'public', 'index.html')

    try {
        const content = await fs.readFile(filePath)
    } catch (error) {
        console.log(error);
    }


    sendResponse(res, 200, "text/html", content)
}