export async function parseJsonBody(req) {
    const body = ''
    for (const chunk of req) {
        body += chunk
    }
    return body
}