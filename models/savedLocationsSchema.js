const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SavedLocationsSchema = new Schema({
  name: String,
});

module.exports = SavedLocationsSchema;
