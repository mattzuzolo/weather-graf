const mongoose = require("mongoose");

console.log("INSIDE db/MONGOOSE.JS...")

const MONGO_URI = "mongodb://matt:password1@ds029801.mlab.com:29801/weather-graf";

mongoose.Promise = global.Promise;

mongoose.connect(MONGO_URI);
mongoose.connection
  .once("open", () => console.log("Connected to MLAB..."))
  .on("error", (error) => console.log("Error connection to MLAB:", error));

module.exports = { mongoose };