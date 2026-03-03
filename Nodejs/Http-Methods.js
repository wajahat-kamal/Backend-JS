// What is HTTP Methods

/*
HTTP methods batate hain ke client server par kaunsa operation perform karna chahta hai — create, read, update ya delete.

GET → Read
POST → Create
PUT → Update
DELETE → Remove
(CRUD operations)
*/

import http from "node:http"

const server = http.createServer((req, res) => {
    if (req.url === "/user" && req.method === "GET") {
        res.end("User")
    } else if (req.url === "/create-user" && req.method === "POST") {
        res.end("User created")
    } else if (req.url === "/update-user/1" && req.method === "PUT") {
        res.end("User updated")
    } else if (req.url === "/delete-user/1" && req.method === "DELETE") {
        res.end("User deleted")
    }
})
server.listen(5000, () => console.log("Server runing on port 5000"))