const express = require("express");
const colors = require("colors");
const cors = require("cors");
const connectDB = require("./config/db");
const schema = require("./schema/schema");
require("dotenv").config();
const { graphqlHTTP } = require("express-graphql");

const port = 5000;
connectDB();
const app = express();
app.use(cors());
// console.log(process.env.NODE_ENV);
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === "development",
  })
);
app.listen(port, console.log(`Server running on port ${port}`));
