const graphql = require("graphql");
const UserType = require("./types/user_type");

const mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addUser: {
      type: UserType,
      args: {
        username: { type: newGraphQLNonNull(GraphQLString) },
        location: { type: GraphQLString },
      },
      resolve(parentValue, args){
        return fetch("http://localhost:3000/users", configureAddUser(args))
          .then(response => response.json());
      }
    }
  }
})

function configureAddUser({ username, location }){
  return {
    Accept: "application/json",
    method: "POST",
    headers: {
      "Content-type": "application.json"
    },
    body: JSON.stringify({
      username,
      location
    })
  };
}

module.exports = mutation;