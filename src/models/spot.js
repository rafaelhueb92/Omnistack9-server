const mongoose = require("mongoose");

const spotSchema = new mongoose.Schema({
  thumbnail: String,
  company: String,
  price: String,
  techs: [String],
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user"
  }
});

module.exports = mongoose.model("spot", spotSchema);
