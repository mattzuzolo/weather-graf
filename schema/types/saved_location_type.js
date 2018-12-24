const mongoose = require("mongoose");
const graphql = require("graphql");

const {
  GraphQLObjectType,
  GraphQLString,
} = graphql;

const SavedLocation = mongoose.model('savedLocation');

const SavedLocationType = new GraphQLObjectType({
  name: "SavedLocationType",
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    latitude: { type: GraphQLString },
    longitude: { type: GraphQLString },
  })
});

module.exports = SavedLocationType;
