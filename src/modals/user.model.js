const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    }, 
    mobile: {
        type: String,
    }, 
    avatar: {
        type: String,
    },
    password: {
        type: String,
        required: true,
        select: false
    }
}, {
    timestamps: true 
});

const User = mongoose.model("User", userSchema);
module.exports = User;
