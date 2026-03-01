import { getData } from "../utils/getData"

export function handleGet() {
    const data = getData()
    const result = JSON.stringify(data)
    return result
}