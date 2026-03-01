import path from 'node:path'
import fs from 'node:fs/promises'
import { sendResponse } from './sendResponse';

export async function serveStatic(baseDir) {

    const filePath = path.join(baseDir, 'public', 'index.html')

    try {
        const content = await fs.readFile(filePath)
    } catch (error) {
        console.log(error);
    }


    return sendResponse(res, 200, "text/html", content)
}