const mongoose = require("mongoose");

const MONGO_URI = "mongodb://matt:password1@ds029801.mlab.com:29801/weather-graf";
// const MONGO_URI = "mongodb://localhost:27017/weather-graf"

mongoose.Promise = global.Promise;

mongoose.connect(MONGO_URI, { useNewUrlParser: true });
mongoose.connection
  .once("open", () => console.log("Connected to MLAB..."))
  .on("error", (error) => console.log("Error connection to MLAB:", error));

module.exports = mongoose;