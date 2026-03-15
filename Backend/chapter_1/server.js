import express from "express";

const app = express()
const PORT = 9999

app.listen(PORT, () => console.log(`Server runing on port ${PORT}`))