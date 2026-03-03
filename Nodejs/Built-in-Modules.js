// What is fs, path and http modules


// fs, File System
import fs from "node:fs/promises"

// create folder
// await fs.mkdir("files", {recursive: true})

// create file
// await fs.writeFile("files/test.txt", "Hi, Iam Wajahat Kamal!")

// append file
// await fs.appendFile("files/test.txt", " and iam learning nodejs.")

// delete file
// await fs.unlink("files/test.txt")

// readdir
// const readDir = await fs.readdir("files")
// console.log(readDir);

// const readFile = await fs.readFile("files/test.txt", "utf8")
// console.log(readFile);




// http modules
import http from "node:http"

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json")
    res.write("Hello, iam from nodejs!")
    res.end()
})
server.listen(5000, () => console.log("Server running on port 5000!"))