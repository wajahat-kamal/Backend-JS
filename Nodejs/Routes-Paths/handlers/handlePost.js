import { parseJsonBody } from "../utils/parseJsonBody.js";
import { sendResponse } from "../utils/sendResponse.js";

export async function handlePost(req, res) {
    // const {title, text, timpStamp, location} = req.body;

    // if (!title || !text || !timpStamp || !location) {
    //     return sendResponse(res, 404, "application/json", "All fields are required!")
    // }
    const rawBody = parseJsonBody(req)
    console.log(rawBody);

}