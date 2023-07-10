import graphql from "graphql";

import { Model } from "./models/Model.js";
import {
  getGraphQLQueryArgs,
  getMongoDbQueryResolver,
} from "graphql-to-mongodb";

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLInt,
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull,
} = graphql;

//Schema defines data on the Graph like object types(book type), the relation between
//these object types and describes how they can reach into the graph to interact with
//the data to retrieve or mutate the data

const ModelType = new GraphQLObjectType({
  name: "Model",
  //We are wrapping fields in the function as we don’t want to execute this until
  //everything is inilized. For example below code will throw an error AuthorType not
  //found if not wrapped in a function
  fields: () => ({
    id: { type: GraphQLID },
    RiskLevel: { type: GraphQLString },
    Age: { type: GraphQLInt },
    SystolicBP: { type: GraphQLInt },
    DiastolicBP: { type: GraphQLInt },
    HeartRate: { type: GraphQLInt },
    BS: { type: graphql.GraphQLFloat },
    BodyTemp: { type: graphql.GraphQLFloat },

    // resolve(parent, args) {
    //   return Model.find({});
    // },
  }),
});

//RootQuery describes how users can use the graph and grab data.
//E.g Root query to get all authors, get all books, get a particular
//book or get a particular author.
const GetAllData = new GraphQLObjectType({
  name: "GetAllData",
  fields: {
    data: {
      type: new GraphQLList(ModelType),
      args: getGraphQLQueryArgs(ModelType),
      resolve: getMongoDbQueryResolver(
        ModelType,
        async (filter, projection, options, source, args, context) =>
          await Model.find(filter, projection, options)//.toArray()
      ),
    },
  },
});

//Creating a new GraphQL Schema, with options query which defines query
//we will allow users to use it when they are making requestsuntil.
// module.exports = new GraphQLSchema({
//    query: RootQuery
// });

const schemaa = new GraphQLSchema({
  query: GetAllData,
});

export default schemaa;
