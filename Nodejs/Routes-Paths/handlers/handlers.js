import { getData } from "../utils/getData.js";
import { parseJsonBody } from "../utils/parseJsonBody.js";
import { sendResponse } from "../utils/sendResponse.js";

import fs from 'node:fs/promises'
import path from 'node:path';

export async function handleGet(res) {
    const data = await getData()
    const content = JSON.stringify(data)
    sendResponse(res, 200, 'application/json', content)
}

export async function handlePost(req, res) {
    const rawBody = await parseJsonBody(req)
    const data = await fs.readFile(path.join("data", "data.json"), "utf8")
    
    console.log(rawBody);
    console.log(JSON.parse(data));
    
}

