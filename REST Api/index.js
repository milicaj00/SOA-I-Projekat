import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import router from "./routes/routes.js";
import cors from "cors";
// import csv from "csvtojson";
// import { Model } from "./models/Model.js";
// import { ApolloServer } from "apollo-server-express";
// import { resolvers } from "./gql/resolver.graphql.js";
// import { typeDefs } from "./gql/schema.graphql.js";
// const resolvers = require("./gql/resolver.graphql");
// const typeDefs = require("./gql/schema.graphql");
import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";
import { graphqlHTTP } from "express-graphql";

import schema from "./graphql.js";

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL, {
    retryWrites: true,
    w: "majority",
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB", { error });
  });

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "SOA I projekat",
      version: "1.0.0",
      description: "Maternal Health Risks ",
    },
  },
  apis: ["./routes/routes.js"],
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);

const app = express();
app.use(express.json());
app.use(cors());
app.use(router);
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use(
  "/graphql",
  graphqlHTTP({
    //directing express-graphql to use this schema to map out the graph

    schema,

    //directing express-graphql to use graphiql when goto '/graphql' address in the browser

    //which provides an interface to make GraphQl queries

    graphiql: true,
  })
);

// let apolloServer = null;
// async function startServer() {
//   apolloServer = new ApolloServer({
//     typeDefs,
//     resolvers,
//   });
//   await apolloServer.start();
//   apolloServer.applyMiddleware({ app });
// }
// startServer();


app.listen(8080, () => {
  console.log("Server is listening on port 8080.");
});
