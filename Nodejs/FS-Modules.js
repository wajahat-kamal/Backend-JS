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

// create file
await fs.writeFile("test.txt", "Hi, Iam Nodejs!")

// append file
const appendFile = await fs.appendFile("test.txt", "Hi, iam wajahat kamal and iam learning nodejs.")

const readFile = await fs.readFile("test.txt", "utf8")
console.log(readFile);
