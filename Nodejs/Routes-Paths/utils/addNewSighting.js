import fs from "node:fs/promises"
import path from "node:path"

export async function addNewSighting(parsedBody) {
    try {
        const data = await fs.writeFile(path.join("data", "data.json"), parsedBody, "utf8")
        console.log(JSON.parse(body));
        
    } catch (error) {
        console.log(error);
    }
}