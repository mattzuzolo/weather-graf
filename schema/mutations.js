const mongoose = require("mongoose");
const graphql = require("graphql");

const User = mongoose.model("user");
const SavedLocation = mongoose.model("savedLocation");
const UserType = require("./types/user_type");
// const SavedLocationType = mongoose.model("./types/saved_location_type");

const {
  GraphQLObjectType,
  GraphQLString,
} = graphql;

const mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addUser: {
      type: UserType,
      args: {
        username: { type: GraphQLString },
        location: { type: GraphQLString },
      },
      resolve(parentValue, args){
        let user = new User(args);
        user.save()
          .then(response => console.log("SAVE RESPONSE:", response))
          .catch(error => console.log("SAVE ERROR:", error));
      },
    },
    addSavedLocation: {
      type: UserType,
      args: {
        userId: { type: GraphQLString },
        name: { type: GraphQLString },
        longitude: { type: GraphQLString },
        latitude: { type: GraphQLString },
      },
      resolve(parentValue, { userId, name, latitude, longitude }){
        console.log("Adding saved location...", name)
        User.addSavedLocation( userId, name, latitude, longitude )
          .catch(error => console.error(error));
      }
    },
    removeSavedLocation: {
      type: UserType,
      args: {
        userId: { type: GraphQLString },
        locationId: { type: GraphQLString },
      },
      resolve(parentValue, { userId, locationId }){
        User.removeSavedLocation( userId, locationId )
          .catch(error => console.error(error));
      }
    }
  }
})

module.exports = mutation;
