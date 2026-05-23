const express = require("express")
const fs = require("fs")
const path = require("path")
const router = express.Router()

const bookedHotelsPath = path.join(__dirname, "../data/BookedHotels.json")

const loadBookedHotel = () => {
    bookedHotels = fs.readFileSync(bookedHotelsPath, "utf-8")
    return JSON.parse(bookedHotels)

}

const saveBookedHotel = (bookedHotel) => {
    fs.writeFileSync(bookedHotelsPath, JSON.stringify(bookedHotel, null, 2))
}

router.get("/", (req, res) => {
    const listBookedHotels = loadBookedHotel()
    res.json(listBookedHotels)
})

router.post("/", (req, res) => {
    bookedHotels = loadBookedHotel()

    newBookedHotel = {
        full_name: req.body.full_name,
        email_address: req.body.email_address,
        phone_number: req.body.phone_number,
        nationality: req.body.nationality,
        check_in_date: req.body.check_in_date,
        check_out_date: req.body.check_out_date,
        number_of_guests: req.body.number_of_guests,
        room_type: req.body.room_type,
        special_request: req.body.special_request,
        card_number: req.body.card_number,
        expiry_date: req.body.expiry_date,
        cvv: req.body.cvv,
        total_payment: req.body.total_payment
        
    }
    console.log(newBookedHotel.check_in_date - newBookedHotel.check_out_date)
    console.log(newBookedHotel)
    bookedHotels.push(newBookedHotel)
    saveBookedHotel(bookedHotels)
    res.status(201).json({message: "Hotel Booked Successfuly"})
})

module.exports = router