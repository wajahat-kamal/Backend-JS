import { getData } from "../utils/getData.js"

export function handleGet() {
    const data = getData()
    const result = JSON.stringify(data)
    return result
}