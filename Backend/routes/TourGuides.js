const express = require("express")
const router = express.Router()
const tourGuides = require("../data/TourGuides.json")

router.get("/", (req, res) => {
    res.json(tourGuides)
})

router.get("/:id", (req, res) => {
    const tourGuide = tourGuides.find( tg => tg.id === parseInt(req.params.id))
    if(!tourGuide) {
      return  res.status(404).json({message:" Tour Guide is not found"})
    }
    res.json(tourGuide)
})

module.exports = router