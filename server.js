const mongoose = require("mongoose");
const User = require("./models/user")
const express = require("express");
const expressGraphQL = require("express-graphql");
const bodyParser = require("body-parser");

const schema = require("./schema/schema");

const app = express();
const PORT = 4000;

//setup express-graphql middleware with graphiql
app.use(bodyParser.json());
app.use("/graphql", expressGraphQL({
    schema,
    graphiql: true,
}));

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})

