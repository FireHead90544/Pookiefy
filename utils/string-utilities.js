import { randomUUID } from "crypto"

export const generateRandomString = () => {
    return randomUUID()
}

export const encodeBase64 = (str) => {
    return Buffer.from(str).toString('base64')
}