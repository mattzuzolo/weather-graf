const graphql = require("graphql");

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
} = graphql;

const UserType = new GraphQLObjectType({
  name: "UserType",
  fields: () => ({
    id: { type: GraphQLString },
    username: { type: GraphQLString },
    location: { type: GraphQLString },
    savedLocations: { 
      type: GraphQLList,
      resolve: (user) => (user.savedLocations)
    }
  })
});

module.exports = UserType;