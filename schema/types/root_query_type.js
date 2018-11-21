const graphql = require("graphql");
const UserType = require("./user_type");

const { 
  GraphQLObjectType,
  GraphQLList,
  GraphQLString,
} = graphql;


const RootQueryType = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    users: {
      type: new GraphQLList(UserType),
      resolve() {
        return User.find({});
      }
    },
    user: {
      type: UserType,
      args: { id: { type: GraphQLString } },
      resolve(parentValue, args){
        return Song.findById(id);
      }
    }
  }
})

module.exports = RootQueryType