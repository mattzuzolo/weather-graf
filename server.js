const express = require("express");
const expressGraphQL = require("express-graphql");
const schema = require("./schema");

const app = express();
const PORT = 4000;

//setup graphql middleware with graphiql
app.use("/graphql", expressGraphQL({
    graphiql: true,
}));

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})
