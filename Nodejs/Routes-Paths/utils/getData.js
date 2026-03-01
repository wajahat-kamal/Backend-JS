import fs from 'node:fs'

export async function getData() {
    try {
        const data = await fs.readFile("data.json")
        console.log(data);

        return data
    } catch (error) {
        console.log(error);
    }

}