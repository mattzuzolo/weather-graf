const graphql = require("graphql");
const { GraphQLSchema } = graphql;

const {
  GraphQLObjectType,
  GraphQLString,
} = graphql;

const UserType = new GraphQLObjectType({
  name: "User",
  fields: () => ({
    id: { type: GraphQLString },
    username: { type: GraphQLString },

  })
})

const RootQueryType = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    user: {
      type: UserType,
      resolve(parentValue, args, req){
        return req.user;
      }
    }
  }
})

module.exports = new GraphQLSchema({
  query: RootQueryType,
});