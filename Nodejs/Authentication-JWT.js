// Authentication: User ki identity verify karna (login karna)
// JWT: jwt ik secure token deta hai jo server user ko login hone baad deta hai


import http from "node:http"
import jwt from "jsonwebtoken"

const server = http.createServer((req, res) => {
    const loginSuccess = true
    if (loginSuccess) {
        const token = jwt.sign({ userId: 1 }, "secretKey", { expiresIn: "1h" })
        res.end({ token })
    }
})
server.listen(5000, () => console.log("Server runing on port 5000"))