const express = require("express")
const fs = require("fs")
const path = require("path")
const router = express.Router()

const usersPath = path.join(__dirname,"../data/Users.json")

const loadUser = () => {
    const users = fs.readFileSync(usersPath, "utf-8")
    return JSON.parse(users)
}

const saveUser = (user) => {
    fs.writeFileSync(usersPath, JSON.stringify(user, null, 2))
}

router.get("/", (req, res) => {
    const users = loadUser()
    res.json(users)
})

router.get("/:id", (req, res) => {
    const user = users.find( u => u.id === parseInt(req.params.id))
    if(!user) {
        return res.status(404).json({message: "User Not Found"})
    }
})

router.post("/", (req, res) => {
    const users = loadUser()
    const newUser = {
        id: users.length+1,
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    }
    users.push(newUser)
    saveUser(users)
    res.status(201).json(newUser)
    
})


module.exports = router