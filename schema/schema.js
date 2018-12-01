const graphql = require("graphql");
const { GraphQLSchema } = graphql;


const RootQuery = require("./types/root_query_type");
const mutations = require("./mutations");


//schema takes in rootquery and returns schema instance
module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: mutations,
});