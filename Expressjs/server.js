import express from "express";

const app = express()
const port = 5000;

// Middleware
app.use((req, res, next) => {
    console.log(req.url, req.method)
    next();
})

// Route Params
app.get("/name/:name", (req, res) => {
    res.send(req.params.name)
})

// Query Parameters
app.get("/users", (req, res) => {
    res.send(req.query)
})

app.get("/", (req, res) => {
    res.send("Hello World")
})

app.listen(port, () => console.log(`Server runing on port ${port}`))