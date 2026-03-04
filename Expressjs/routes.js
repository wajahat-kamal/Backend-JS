import express from "express";
const router = express.Router()

// Route Params
router.get("/name/:name", (req, res) => {
    res.send(req.params.name)
})

// Query Parameters
router.get("/users", (req, res) => {
    res.send(req.query)
})

export default router