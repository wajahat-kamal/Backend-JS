import fs from 'node:fs'
import path from 'node:path';

export async function getData() {
    try {
        const data = await fs.readFile(path.join(import.meta.dirname, "data", "data.json"))
        console.log(data.parse());

        return data
    } catch (error) {
        console.log(error);
    }

}
getData()