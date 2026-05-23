const express = require("express")
const fs = require("fs")
const path = require("path")
const router = express.Router()

const usersPath = path.join(__dirname, "../data/Users.json")
const loadUser = () => {
    const users = fs.readFileSync(usersPath, "utf-8")
    return JSON.parse(users)
}

router.post("/", (req, res) => {
    
    const users = loadUser()
    const user = users.find( user =>user.name === req.body.name)

    if(!user){
        return res.status(404).json({message:" user not found"})
    }
    
    if( user.password !== req.body.password) {
      return res.status(401).json({message: "Incorrect Password"})
    }

    
       return res.status(200).json({message:" Signin successful"})

})

module.exports = router