const express = require("express")
const router = express.Router()
const Destinations = require("../data/Destinations.json")


router.get("/", (req, res) => {
    res.json(Destinations)
})

router.get("/:id", (req, res) => {
    const destination = Destinations.find( d => d.id === parseInt(req.params.id))
    if(!destination) {
        return res.status(404).json({message: "Destination not found"})
    }
    res.json(destination)
})

module.exports = router