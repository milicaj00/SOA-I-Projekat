import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type Model {
    id: ID
    Age: Int
    SystolicBP: Int
    DiastolicBP: Int
    BS: Float
    BodyTemp: Float
    HeartRate: Int
    RiskLevel: String
  }

  input ModelInput {
    # Age: StringQueryOperatorInput
    Age_eq: Int
    SystolicBP: StringQueryOperatorInput
    DiastolicBP: StringQueryOperatorInput
    BS: StringQueryOperatorInput
    BodyTemp: StringQueryOperatorInput
    HeartRate: StringQueryOperatorInput
    RiskLevel: String
  }

  input StringQueryOperatorInput {
    Age_eq: Int
    _gr: Int
    lt: Int
  }

  type Query {
    getAllData(filter: ModelInput): [Model]
  }

  type Mutation {
    addData(input: ModelInput): Model
  }
`;
