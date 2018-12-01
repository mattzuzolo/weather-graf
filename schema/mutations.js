const mongoose = require("mongoose");
const graphql = require("graphql");
// const fetch = require("node-fetch");

const User = mongoose.model("user");
const UserType = require("./types/user_type");

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
        console.log("NEW USER INSTANCE TO SAVE", user);
        user.save()
      }
    },
  }
})

module.exports = mutation;