const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: String,
  location: String,
})

mongoose.model("user", UserSchema);