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
    if (req.url === "/") {

    }
})
server.listen(5000, () => console.log("Server runing on port 5000"))