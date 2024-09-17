const mongoose = require('mongoose')


const businessSchema = new mongoose.Schema({
    businessName: {
        type: String,
        required: true,
        minLength: 2,
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
    RFC: {
        type: String,
        required: true,
        minLength: 12,
        maxLength: 13,    
    },
    personaMoral: {
        type: String,
        required: true,
        minLength: 2,
        maxLength: 100,
    },
    businessType: {
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
    openingTime: {
        type: Number,
        default: 0,
    },
    closingTime: {
        type: Number,
        default: 0,
    },
    daysCheckbox: {
        type: daysCheckboxSchema,
        default: () => ({
    
            monday: { default: false },
            tuesday: { default: false },
            wednesday: { default: false },
            thursday: { default: false },
            friday: { default: false },
            saturday: { default: false },
            sunday: { default: false },
            everyDay: { default: false},
          }),

    },
    address: {
        street: { type: String, required: true },
        number: { type: Number, required: true },
        neighborhood: { type: String, required: true },
        municipality: { type: String, required: true },
        state: { type: String, required: true },
        zipCode: { type: Number, required: true },
      },
    cratedAt: {
        type: Date,
        default: Date.now,
    },


})

module.exports = mongoose.model("Business", businessSchema)