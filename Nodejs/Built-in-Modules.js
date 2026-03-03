// fs, path and http modules


// fs, File System & path
import fs from "node:fs/promises"
import path from "node:path";

const filePath = path.join(process.cwd(), "files", "test.txt")

// create folder
// await fs.mkdir("files", {recursive: true})

// create file
// await fs.writeFile(filePath, "Hi, Iam Wajahat Kamal!")

// append file
// await fs.appendFile(filePath, " and iam learning nodejs.")

// delete file
// await fs.unlink(filePath)

// readdir
// const readDir = await fs.readdir("files")
// console.log(readDir);

// const readFile = await fs.readFile(filePath, "utf8")
// console.log(readFile);

// console.log(path.extname(filePath));


// http modules
import http from "node:http"

const server = http.createServer((req, res) => {
    if (req.url === "/" && req.method === "GET") {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json")
        res.write("Hello, iam from nodejs!")
        res.end()
    }
})
// server.listen(5000, () => console.log("Server running on port 5000!"))