import fs from "node:fs/promises"
import path from "node:path"

export async function addNewSighting(parsedBody) {
    const filePath = path.join("data", "data.json")
    try {
        const fileData = await fs.readFile(filePath, "utf8")
        const data = JSON.parse(fileData)
        data.push(parsedBody)
        console.log(data);
        await fs.writeFile(filePath, JSON.stringify(data, null, 2), "utf8")
    } catch (error) {
        console.error("File read error:", error)
    }
}