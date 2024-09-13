const mongoose = require('mongoose')


const eventSchema = new mongoose.Schema({
    eventName: {
        type: String,
        required: true,
        minLength: 2,
        maxLength: 100,
    },
    description: {
        type: String,
        required: true,
        minLength: 2,
        maxLength: 500,  
    },
    startDate: {
        type: Date,
        required: true,
    },
    endDate: {
        type: Date,
        required: true,
    },
    openingTime: {
        type: Number,
        default: 0,
    },
    closingTime: {
        type: Number,
        default: 0,
    },


})

module.exports = mongoose.model("Event", eventSchema)