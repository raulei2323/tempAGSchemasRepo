const mongoose = require('mongoose')


const schema = new mongoose.Schema({
    stars: {
        type: Number,
        min: 1,
        max: 5,
    },
    businessId: {
        type: Schema.Types.ObjectId,
        ref: "business",
      },
      userId: {
        type: Schema.Types.ObjectId,
        ref: "user",
      },
})
module.exports = mongoose.model("Ranking", rankingSchema)