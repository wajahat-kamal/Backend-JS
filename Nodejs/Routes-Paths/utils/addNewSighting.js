import fs from "node:fs/promises"
import path from "node:path"
import { getData } from "./getData"

export async function addNewSighting(newSighting) {
    try {
        const sightings = await getData()
        sightings.push(newSighting)

        const pathJSON = path.join('data', 'data.json')

        await fs.writeFile(
            pathJSON,
            JSON.stringify(sightings),
            'utf8'
        )
    } catch (error) {
        throw new Error("File read error:", error)
    }
}