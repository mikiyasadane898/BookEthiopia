const express = require("express")
const router = express.Router()
const cars = require("../data/Cars.json")

// Get All Cars
router.get("/", (req, res)=> {
    res.json(cars)
} )

// Get Single Car by ID
router.get("/:id", (req, res) => {
    const car = cars.find(c => c.id === parseInt(req.params.id));
    if(!car){
        return res.status(404).json({message: " Car not found"})
    }
    res.json(car)

})

module.exports = router