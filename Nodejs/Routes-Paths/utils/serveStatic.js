import path from 'node:path'
import fs from 'node:fs/promises'

export async function serveStatic(baseDir) {

    const filePath = path.join(baseDir, 'public', 'index.html')

    try {
        const content = await fs.readFile(filePath)
        return content
    } catch (error) {
        console.log(error);
    }

}