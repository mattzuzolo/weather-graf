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
      type: GraphQLList(GraphQLString),
      resolve: (user) => {
        return user.savedLocations.map(savedLocation => savedLocation.name);
      }
    }
  })
});

module.exports = UserType;