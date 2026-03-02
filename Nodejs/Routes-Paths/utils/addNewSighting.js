import fs from "node:fs/promises"
import path from "node:path"
import { getData } from "./getData.js"
import sanitize from "sanitize-html"

export async function addNewSighting(newSighting) {
    const pathJSON = path.join("data", "data.json")
    try {
        const sightings = await getData()
        sightings.push(sanitizeData)

        await fs.writeFile(
            pathJSON,
            JSON.stringify(sightings, null, 2),
            "utf8"
        )
    } catch (error) {
        throw error
    }
}