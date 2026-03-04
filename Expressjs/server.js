import express from "express";
import router from "./routes.js";
import { logger } from "./middlewares.js";

const app = express()
const port = 5000;

// Built in Middlewares
app.use(express.json()) // JSON body ko parse karta hai
app.use(express.urlencoded()) // Form data (HTML se anne wala data) parse karta hai
// app.use(express.static()) // static files serve karta hai (HTML, CSS, JS, Images) 

// Middleware
app.use(logger)

// Routes 
app.use("/", router)
app.get("/", (req, res) => {
    res.send("Hello World")
})

app.listen(port, () => console.log(`Server runing on port ${port}`))