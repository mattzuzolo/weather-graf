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
        savedLocations: { type: GraphQLList }
      },
      resolve(parentValue, args){
        args = {...args, savedLocations: [{ 
          name: "Charlestown, Rhode Island"},
          { name: "Columbia, Missouri"},
          { name: "Portland, Maine"}
        ]}
        let user = new User(args);
        user.save()
          .then(response => console.log("SAVE RESPONSE:", response))
          .catch(error => console.log("SAVE ERROR:", error));
      },
    },
    addSavedLocation: {
      type: UserType,
      args: {
        name: { type: GraphQLString },
        userId: { type: GraphQLString },
      },
      resolve(parentValue, { name, userId }){
        return User.addSavedLocation( name, userId );
      }
    }
  }
})

module.exports = mutation;