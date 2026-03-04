import express from "express";
import router from "./routes.js";
import { logger } from "./middlewares.js";
import cors from "cors"

const app = express()
const port = 5000;

// Third-party Middleware
app.use(cors())
app.set("View engine", "ejs")

// Built in Middlewares
app.use(express.json()) // JSON body ko parse karta hai
app.use(express.urlencoded()) // Form data (HTML se anne wala data) parse karta hai
// app.use(express.static("public")) // static files serve karta hai (HTML, CSS, JS, Images) 

// Error Handling using Middleware
app.use((err, req, res, next) => {
    console.log(err.stack);
    res.status(500).send({ message: err.message })
})

// Middleware
app.use(logger)

// Routes 
app.use("/", router)
app.get("/", (req, res) => {
    res.send("Hello World")
})

app.listen(port, () => console.log(`Server runing on port ${port}`))