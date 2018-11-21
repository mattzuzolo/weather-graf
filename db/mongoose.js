const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

const MONGO_URI = "mongodb://matt:password1@ds029801.mlab.com:29801/weather-graf";

mongoose.connect(MONGO_URI);
mongoose.connection
  .once("open", () => console.log("Connected to MLAB..."))
  .on("error", (error) => console.log("Error connection to MLAB:", error));

module.exports = { mongoose };