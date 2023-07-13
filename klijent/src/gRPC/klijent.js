import React, { Fragment, useEffect, useState, useMemo } from "react";
import { DataServiceClient } from "./data_grpc_web_pb";
import { None, DataId } from "./data_pb";
import { MaterialReactTable } from "material-react-table";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  Box,
  Button,
  Paper,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Dialog,
} from "@mui/material";
import Forma from "../Forma";

const host = "https://localhost:7222";
const client = new DataServiceClient(host);

function getData(setResponseData) {
  const stream = client.getAll(new None(), {});

  stream.on("data", (response) => {
    setResponseData((prevData) => [...prevData, response.toObject()]);
    // console.log(data);
  });

  stream.on("error", (err) => {
    console.error("Error:", err);
  });

  return () => {
    stream.cancel(); // Cancel the stream when the component unmounts
  };
}

function deleteData(id) {
  const request = new DataId();
  request.setId(id);

  client.deleteData(request, {}, (err, response) => {
    if (err) {
      console.error("Error:", err);
    } else {
      alert("Data deleted successfully");
    }
  });
}

const header = [
  "Age",
  "SystolicBP",
  "DiastolicBP",
  "BS",
  "BodyTemp",
  "HeartRate",
  "RiskLevel",
  "",
];

const GRPCClient = () => {
  const [data, setResponseData] = useState([]);
  const [d, setD] = useState(null);
  const [change, setChangeData] = useState(false);
  const [newdata, setNewData] = useState(false);

  const handleChange = (value) => {
    setChangeData(value);
  };
  const handleNewData = (value) => {
    setNewData(value);
  };

  useEffect(() => {
    getData(setResponseData);
  }, []);

  return (
    <>
      {/* {console.log(data)} */}

      <Box sx={{ m: "2%" }}>
        <Dialog
          open={change}
          onClose={async () => {
            await handleChange(false);
            await setD(null);
            await setResponseData([]);
            await getData(setResponseData);
          }}
        >
          <Forma data={d} client={client} />
        </Dialog>
        <Dialog
          open={newdata}
          onClose={async () => {
            await handleNewData(false);
            await setD(null);
            await setResponseData([]);
            await getData(setResponseData);
          }}
        >
          <Forma data={d} client={client} />
        </Dialog>

        <Paper>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  {header.map((value) => (
                    <TableCell key={value} sx={{ textAlign: "center" }}>
                      {value}
                    </TableCell>
                  ))}
                  <TableCell>
                    <Button
                      size="small"
                      variant="contained"
                      color="secondary"
                      onClick={() => handleNewData(true)}
                    >
                      new data
                    </Button>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data?.map((d) => (
                  <Fragment key={d.id}>
                    <TableRow key={d.id}>
                      <TableCell>{d?.age}</TableCell>
                      <TableCell>{d?.systolicbp}</TableCell>
                      <TableCell>{d?.diastolicbp}</TableCell>
                      <TableCell>{d?.bs}</TableCell>
                      <TableCell>{d?.bodytemp}</TableCell>
                      <TableCell>{d?.heartrate}</TableCell>
                      <TableCell>{d?.risklevel}</TableCell>
                      <TableCell>
                        <Button
                          size="small"
                          color="secondary"
                          variant="outlined"
                          onClick={() => {
                            setD(d);
                            handleChange(true);
                          }}
                        >
                          Modify
                        </Button>
                      </TableCell>
                      <TableCell>
                        <Button
                          size="small"
                          variant="outlined"
                          color="error"
                          onClick={async () => {
                            await deleteData(d.id);
                            await setResponseData([]);
                            await getData(setResponseData);
                          }}
                          startIcon={<DeleteIcon />}
                        >
                          Delete
                        </Button>
                      </TableCell>
                    </TableRow>
                  </Fragment>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Box>
    </>
  );
};

export default GRPCClient;
