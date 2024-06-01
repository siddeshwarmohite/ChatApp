const express = require("express")
const user = require("./src/routes/user.routes.js")
const connectdb = require("./src/db/db.js")

connectdb()
const app =express()
app.use(express.json())
app.use("/user",user)

app.listen(process.env.PORT || 5000,()=>{
console.log("server Strated")
})