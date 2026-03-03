import fs from "node:fs/promises"
import path from "node:path"
import { getData } from "./getData.js"
export async function addNewSighting(newSighting) {
    const pathJSON = path.join("data", "data.json")
    try {
        const sightings = await getData()
        sightings.push(newSighting)

        await fs.writeFile(
            pathJSON,
            JSON.stringify(sightings, null, 2),
            "utf8"
        )
    } catch (error) {
        throw error
    }
}