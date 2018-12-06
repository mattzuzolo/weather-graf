const mongoose = require("mongoose");
const SavedLocationsSchema = require("./savedLocationsSchema");
const Schema = mongoose.Schema;


const UserSchema = new Schema({
  username: String,
  location: String,
  savedLocations: [SavedLocationsSchema],
})

const User = mongoose.model("user", UserSchema);

module.exports = { User }