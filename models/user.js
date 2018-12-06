const mongoose = require("mongoose");
const SavedLocationsSchema = require("./savedLocationsSchema");
const Schema = mongoose.Schema;


const UserSchema = new Schema({
  username: String,
  location: String,
  savedLocations: [SavedLocationsSchema],
})

UserSchema.statics.addSavedLocation = function(userId, name){
    return this.findById(userId)
      .then(user => {
        user.savedLocations.push({name})
        return user.save()
      })
      .catch(error => console.error(error));
}

const User = mongoose.model("user", UserSchema);

module.exports = { User }