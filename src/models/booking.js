const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  date: String,
  approved: {
    type: Boolean,
    default: false
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user"
  },
  spot: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "spot"
  }
});

module.exports = mongoose.model("booking", bookingSchema);
