const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const { SavedLocation } = require("./savedLocation");

const UserSchema = new Schema({
  username: String,
  location: String,
  savedLocations: [{
    type: Schema.Types.ObjectId,
    ref: "savedLocation",
  }],
});


UserSchema.statics.addSavedLocation = function(userId, name, longitude, latitude){

  let locationToSave = new SavedLocation({name, longitude, latitude});
  locationToSave.save();
  return this.findById(userId)
    .then(user => {

      user.savedLocations.push(locationToSave)
      return user.save();
    })
    .catch(error => console.error(error));
}

UserSchema.statics.removeSavedLocation = function(userId, locationId){
  return this.findById(userId)
    .then(user => {
      let remainingLocations = user.savedLocations.filter(locationObj => locationObj.id !== locationId)
      return user.updateOne({ id: user.id, savedLocations: remainingLocations });
    })
    .catch(error => console.error(error));
}

UserSchema.statics.findSavedLocations = function(id){
  return this.findById(id)
    .populate("savedLocations")
    .then(user => user.savedLocations)
    .catch(console.error);
}

const User = mongoose.model("user", UserSchema);


module.exports = { User }
