// 
const express = require("express")
const brcypt = require("bcrypt")
const User = require("../modals/user.model.js")

// SignIn  api for user
const SignIn =(req,res)=>{
    const {username,password}= req.body
    res.send(req.body)
}
const SignUP =async(req,res)=>{
    const {name ,username ,email ,password ,avatar ,mobile}= req.body

    try{ 
        const resp = new User({name:name,username:username,password:password,mobile:mobile,email:email})
        const response = await resp.save()
        res.send(response)

    }

catch(err){
    res.send(err)

}
}
const GetAllUsers = async (req,res)=>{
try{
    const resp =  await User.find()
    res.send(resp)

}
catch (err){
    res.send(err)
}
}


module.exports ={SignIn,SignUP,GetAllUsers}
