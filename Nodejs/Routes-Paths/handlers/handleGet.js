import { getData } from "../utils/getData.js"
import { sendResponse } from "../utils/sendResponse.js"

export function handleGet(res) {
    const data = getData()
    const jsonData = JSON.stringify(data)
    sendResponse(res, 200, "text/html", jsonData)
}