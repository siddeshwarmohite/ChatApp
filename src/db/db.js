const mongoose = require("mongoose")

const connectdb = ()=>{
    mongoose.connect("mongodb://127.0.0.1/chatapp")
    .then(() => {
      console.log('Connected to database');
    })
    .catch((error) => {
      console.error('Error connecting to database:', error);
    })}

module.exports =connectdb