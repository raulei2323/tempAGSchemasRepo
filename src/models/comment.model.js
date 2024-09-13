const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new mongoose.Schema({
  businessId: {
    type: Schema.Types.ObjectId,
    ref: "business",
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "user",
  },
  comment: {
    type: String,
    required: true,
    minLength: 2,
    maxLength: 500,
},
});

module.exports = mongoose.model("Comment", commentsSchema);