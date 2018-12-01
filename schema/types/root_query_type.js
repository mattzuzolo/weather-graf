const mongoose = require("mongoose");
const graphql = require("graphql");
const { 
  GraphQLObjectType,
  GraphQLList,
  GraphQLString,
} = graphql;

//Types
const UserType = require("./user_type");

//Models
const User = mongoose.model("user");

//test data
const testUsers = [
  { id: "23", username: "Matt", location: "Lower East Side" },
  { id: "152", username: "Marc", location: "Midtown" }
];


const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    user: {
      type: UserType,
      args: { id: { type: GraphQLString } },
      resolve(parentValue, { id }){
        return User.findById(id);
      }
    },
    users: {
      type: new GraphQLList(UserType),
      resolve() {
        console.log("FINDING ALL USERS...");
        return User.find({});
      }
    },
  }
})

module.exports = RootQuery;


    // let foundUser = testUsers.find(user => args.id === user.id);
        // return foundUser;
        // return User.findById(id);