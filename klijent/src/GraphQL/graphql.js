import React from "react";
import { ApolloClient, InMemoryCache, useQuery, gql } from "@apollo/client";
import { MaterialReactTable } from "material-react-table";
import FormGQL from "./FormGQL";

export const client = new ApolloClient({
  uri: "http://localhost:8080/graphql/",
  cache: new InMemoryCache(),
});

const GET_ALL_DATA = gql`
  query GetAllData {
    data {
      Age
      BS
      RiskLevel
    }
  }
`;

//I OVDE TABELA DA SE SKRPI
const GraphQL = () => {
  const { data, loading, error } = useQuery(GET_ALL_DATA);

  if (data) console.log(data.data);

  return (
    <>
      <FormGQL />
      {/* <MaterialReactTable columns={header} data={data.data} /> */}
    </>
  );
};

export default GraphQL;
