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
        console.log("USER TO SAVE:", user);
        user.save()
          .then(response => console.log("SAVE RESPONSE:", response))
          .catch(error => console.log("SAVE ERROR:", error));
      }
    },
  }
})

module.exports = mutation;