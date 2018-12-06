const graphql = require("graphql");

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQlList,
} = graphql;

const UserType = new GraphQLObjectType({
  name: "UserType",
  fields: () => ({
    id: { type: GraphQLString },
    username: { type: GraphQLString },
    location: { type: GraphQLString },
  })
});

module.exports = UserType;