const graphql = require("graphql");
const UserType = require("./user_type");

const { 
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
} = graphql;


const RootQueryType = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    user: {
      type: UserType,
      args: { id: { type: GraphQLString } },
      resolve(parentValue, args){
        return fetch(`http://localhost:3000/users/${args.id}`)
          .then(response => response.json());
      }
    }
  }
})

module.exports = RootQueryType