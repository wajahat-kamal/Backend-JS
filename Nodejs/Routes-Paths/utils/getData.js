import fs from 'node:fs/promises'
import path from 'node:path';

export async function getData() {
    try {
        const data = await fs.readFile(path.join("data", "data.json"), "utf8")
        const result = JSON.parse(data)
        return result
    } catch (error) {
        console.log(error);
        return [];
    }
}