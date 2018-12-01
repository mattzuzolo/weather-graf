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
