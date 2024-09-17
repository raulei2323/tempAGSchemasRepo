const mongoose = require('mongoose')


const schema = new mongoose.Schema({
    type: String,
    required: true,
    sender: {
        businessId: {
            type: Schema.Types.ObjectId,
            ref: "business",
          },
          userId: {
            type: Schema.Types.ObjectId,
            ref: "user",
          },
    },
    addressee: {
        businessId: {
            type: Schema.Types.ObjectId,
            ref: "business",
          },
          userId: {
            type: Schema.Types.ObjectId,
            ref: "user",
          },

    },
    content: {
        type: String,
        required: true,
        minLength: 2,
        maxLength: 500,
    },
})
module.exports = mongoose.model("Message", messageSchema)