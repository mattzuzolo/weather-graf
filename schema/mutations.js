const graphql = require("graphql");
const fetch = require("node-fetch");

const UserType = require("./types/user_type");

const { 
  GraphQLObjectType,
  GraphQLString,
} = graphql;

const mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addUser: {
      type: UserType,
      args: {
        username: { type: GraphQLString },
        location: { type: GraphQLString },
      },
      resolve(parentValue, args){
        console.log("POSTING...", args);
        return fetch("http://localhost:4000/users", configureAddUser(args))
          .then(response => response.json())
          .then(console.log)
      }
    }
  }
})

function configureAddUser(args){
  console.log("Configuring POST request...")
  let config = {
    Accept: "application/json",
    method: "POST",
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify(args)
  };
  console.log("CONFIG: ", config);
  return config;
}

module.exports = mutation;