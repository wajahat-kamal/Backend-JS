import { addNewSighting } from "../utils/addNewSighting.js";
import { getData } from "../utils/getData.js";
import { parseJsonBody } from "../utils/parseJsonBody.js";
import { sendResponse } from "../utils/sendResponse.js";

export async function handleGet(res) {
    const data = await getData()
    const content = JSON.stringify(data)
    sendResponse(res, 200, 'application/json', content)
}

export async function handlePost(req, res) {
    const parsedBody = await parseJsonBody(req)
    addNewSighting(parsedBody)
}

