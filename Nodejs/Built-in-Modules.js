// What is fs modules
/*
fs ka matlab hai File System module.
Ye Node.js ka built-in module hai jo files aur folders ke sath kaam karne ke liye use hota hai.

readFile()    File read
writeFile()	  File create/overwrite
appendFile()  Data add karna
unlink()	  File delete
mkdir()	      Folder create
readdir()	  Folder ke files read
*/

// Modern + Recommended 
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
