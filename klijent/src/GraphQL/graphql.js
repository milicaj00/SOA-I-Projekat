import React, { useMemo, useState } from "react";
import { ApolloClient, InMemoryCache, useQuery, gql } from "@apollo/client";
import { MaterialReactTable } from "material-react-table";
import FormGQL from "./FormGQL";
import { Box, Typography, Button, Dialog, TextField } from "@mui/material";

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

function SendQuery(setData, query) {
  const { data, loading, error } = useQuery(query);
  setData(data.data);
}

const GraphQL = () => {
  const { data, loading, error } = useQuery(GET_ALL_DATA);
  const [createModalOpen, setCreateModalOpen] = useState(false);
  // const [data, setData] = useState([]);

  const columns = useMemo(
    () => [
      {
        accessorKey: "Age",
        header: "Age",
        size: 30,
      },
      {
        accessorKey: "SystolicBP",
        header: "SystolicBP",
        size: 30,
      },
      {
        accessorKey: "DiastolicBP",
        header: "DiastolicBP",
        size: 30,
      },
      {
        accessorKey: "BS",
        header: "BS",
        size: 30,
      },
      {
        accessorKey: "BodyTemp",
        header: "BodyTemp",
        size: 30,
      },
      {
        accessorKey: "HeartRate",
        header: "HeartRate",
        size: 30,
      },
      {
        accessorKey: "RiskLevel",
        header: "RiskLevel",
        size: 30,
      },
    ],
    []
  );

  if (data) console.log(data.data);

  return (
    <>
      {/* <Dialog open={createModalOpen}>
        <Box
          className="cardCenter marginS"
          sx={{ gap: "1vh", padding: { sm: "10% 10%" }, alignItems: "stretch" }}
        >
          <Typography className="cardCenter" variant="h4">
            New Query
          </Typography>
          <Box
            component="form"
            onSubmit={(event) => {
              event.preventDefault();
              const new_query = event.query;
              SendQuery(setData, new_query);
            }}
          >
            <TextField
              fullWidth
              name="query"
              label="Query"
              multiline
              rows={7}
              defaultValue="gql`
          query GetAllData {
            data {
              Age
              BS
              RiskLevel
            }
          }
          `"
            />
            <Button
              fullWidth
              sx={{ mt: "1vh" }}
              size="small"
              variant="contained"
              type="submit"
            >
              Send
            </Button>
          </Box>
        </Box>
      </Dialog> */}
      <MaterialReactTable
        columns={columns}
        data={data?.data ?? []}
        // renderTopToolbarCustomActions={() => (
        //   <Button
        //     color="secondary"
        //     onClick={() => setCreateModalOpen(true)}
        //     variant="contained"
        //   >
        //     New Query
        //   </Button>
        // )}
      />
    </>
  );
};

export default GraphQL;
