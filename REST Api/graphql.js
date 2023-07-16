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

const ModelType = new GraphQLObjectType({
  name: "Model",
  fields: () => ({
    id: { type: GraphQLID },
    RiskLevel: { type: GraphQLString },
    Age: { type: GraphQLInt },
    SystolicBP: { type: GraphQLInt },
    DiastolicBP: { type: GraphQLInt },
    HeartRate: { type: GraphQLInt },
    BS: { type: graphql.GraphQLFloat },
    BodyTemp: { type: graphql.GraphQLFloat },

  }),
});


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

const schemaa = new GraphQLSchema({
  query: GetAllData,
});

export default schemaa;
