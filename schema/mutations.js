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
          .then(console.log("SUCCESS"))
          .catch(error => console.log("FAILURE!", error));
      }
    },
  }
})

// function configureAddUser(args){
//   console.log("Configuring POST request...")
//   let config = {
//     Accept: "application/json",
//     method: "POST",
//     headers: {
//       "Content-type": "application/json"
//     },
//     body: JSON.stringify(args)
//   };
//   console.log("CONFIG: ", config);
//   return config;
// }

module.exports = mutation;