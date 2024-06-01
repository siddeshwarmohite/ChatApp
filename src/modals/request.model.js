const mongoose = require("mongoose");

const requestSchema = new mongoose.Schema({
    status:{
        type:string,
        default:"pending",
        enum:["pending","rejected","accepted"],
    },
    sender: {
        type: mongoose.Schema.Types.ObjectId,
        ref :User ,
    }, 
    receiver: {
        type: mongoose.Schema.Types.ObjectId,
        ref :User ,
    }, 
}, {
    timestamps: true 
});

const Request = mongoose.model("Request", requestSchema);
module.exports =Request;
