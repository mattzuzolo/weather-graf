const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SavedLocationSchema = new Schema({
  name: String,
  latitude: String,
  longitude: String,
});

const SavedLocation = mongoose.model("savedLocation", SavedLocationSchema);

module.exports = { SavedLocation }
