const mongoose = require('mongoose')


const schema = new mongoose.Schema({
    
    profilePicture: {
        type: Image,
        required: false,
    },
    firstName: {
        type: String,
        required: false,
        minLength: 2,
        maxLength: 100,
    },
    lastName: {
        type: String,
        required: false,
        maxLength: 100,  
    },
    email: {
        type: String,
        required: true,
        match: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/,
    },
    password: {
        type: String,
        required: true,
    },
    verified: {
        type: Boolean,
        default: false,
        required: true,
    },
    birthDate: {
        type: Date,
        required: false,
    },
    bio: {
        type: String,
        required: false,
        minLength: 2,
        maxLength: 500,
    },
    cratedAt: {
        type: Date,
        default: Date.now,
    },



})
module.exports = mongoose.model("User", userSchema)