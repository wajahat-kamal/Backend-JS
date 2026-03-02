import { sightingEvents } from "../eents/sighting-event.js";
import { addNewSighting } from "../utils/addNewSighting.js";
import { getData } from "../utils/getData.js";
import { parseJsonBody } from "../utils/parseJsonBody.js";
import { sanitizeInput } from "../utils/sanitizeInput.js";
import { sendResponse } from "../utils/sendResponse.js";

export async function handleGet(res) {
    const data = await getData()
    const content = JSON.stringify(data)
    sendResponse(res, 200, 'application/json', content)
}

export async function handlePost(req, res) {
    try {
        const parsedBody = await parseJsonBody(req)
        const sanitizeBody = sanitizeInput(parsedBody)
        await addNewSighting(sanitizeBody)
        sightingEvents.emit("sighting-added", sanitizeBody)
        sendResponse(res, 201, 'application/json', JSON.stringify(parsedBody))
    } catch (err) {
        sendResponse(res, 400, 'application/json', JSON.stringify({ error: err }))
    }
}

export async function handleNews(req, res) {
    
}