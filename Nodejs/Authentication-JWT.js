// Authentication: User ki identity verify karna (login karna). “Who are you?”
// JWT: jwt ik secure token deta hai jo server user ko login hone baad deta hai
// Authorization: decide karna ke user kya kya karsakta hai (permisions). "What can you do?"


import http from "node:http"
import jwt from "jsonwebtoken"

const server = http.createServer((req, res) => {
    const loginSuccess = true
    if (loginSuccess) {
        const token = jwt.sign({ userId: 1 }, "secretKey", { expiresIn: "1h" })
        res.writeHead(200, { "Content-Type": "application/json" })
        res.end(JSON.stringify({ token }))
    } else {
        res.writeHead(401, { "Content-Type": "application/json" })
        res.end(JSON.stringify({ message: "Login failed" }))
    }
})
server.listen(5000, () => console.log("Server runing on port 5000"))