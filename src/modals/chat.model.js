const mongoose = require("mongoose");
const User = require("./user.model");

const chatSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    groupChat: {
        type: Boolean ,
         default :false
           },
    creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref :User ,
    }, 
    members: [{
        type: mongoose.Schema.Types.ObjectId,
        ref :User ,
    }], 
   
}, {
    timestamps: true 
});

const Chat = mongoose.model("Chat", chatSchema);
module.exports = Chat;
