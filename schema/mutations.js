const mongoose = require("mongoose");
const graphql = require("graphql");
// const fetch = require("node-fetch");

const User = mongoose.model("user");
const UserType = require("./types/user_type");

const { 
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
} = graphql;

const mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addUser: {
      type: UserType,
      args: {
        username: { type: GraphQLString },
        location: { type: GraphQLString },
        // savedLocations: { type: GraphQLString },
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
      },
      resolve(parentValue, { userId, name }){
        User.addSavedLocation( userId, name )
          .then(response => console.log("response", response))
          .catch(error => console.error(error));
      }
    }
  }
})

module.exports = mutation;