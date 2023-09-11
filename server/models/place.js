const mongoose = require("mongoose");

const PlaceSchema = new mongoose.Schema({
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  title: String,
  addres: String,
  photos: [String],
  description: String,
  perks: [String],
  extraInfo: String,
  checkin: Number,
  checkOut: Number,
  maxGuests: Number,
});

const PlaceModel = mongoose.model("Place", PlaceSchema);

module.exports = PlaceModel;
