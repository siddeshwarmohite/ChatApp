const express = require("express")
const {SignIn,SignUP,GetAllUsers}  = require("../controller/user.controller.js")
const user = express.Router()

// SignIn api of user
user.post("/signin",SignIn)
user.post("/signup",SignUP)
user.get("/getalluser",GetAllUsers)
module.exports=user