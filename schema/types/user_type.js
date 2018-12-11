const mongoose = require("mongoose");
const graphql = require("graphql");


const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
} = graphql;

const SavedLocationType = require("./saved_location_type");
const User = mongoose.model("user");

const UserType = new GraphQLObjectType({
  name: "UserType",
  fields: () => ({
    id: { type: GraphQLString },
    username: { type: GraphQLString },
    location: { type: GraphQLString },
    savedLocations: { 
      type: GraphQLList(SavedLocationType),
      resolve: (parentValue) => {
        return User.findSavedLocations(parentValue.id);
      }
    }
  })
});

module.exports = UserType;