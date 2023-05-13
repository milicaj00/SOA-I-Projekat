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
  TablePagination,
} from "@mui/material";
import React, { Fragment, useState, useEffect } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { addData, deleteData, getData } from "./REST api/api";
import Forma from "./Forma";

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

export const DataTable = () => {
  const [data, setData] = useState([]);
  const [d, setD] = useState(null);
  const [change, setChangeData] = useState(false);
  const [newdata, setNewData] = useState(false);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [dataLength, setDataLength] = useState(0);

  const handleChange = (value) => {
    setChangeData(value);
  };
  const handleNewData = (value) => {
    setNewData(value);
  };

  useEffect(() => {
    getData(setData, 0, 5, setDataLength);
  }, []);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
    getData(setData, newPage, rowsPerPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
    getData(setData, 0, parseInt(event.target.value, 10));
  };

  return (
    <Box sx={{ m: "2%" }}>
      <Dialog
        open={change}
        onClose={async () => {
          await handleChange(false);
          await setD(null);
          await getData(setData, page, rowsPerPage);
        }}
      >
        <Forma data={d} />
      </Dialog>
      <Dialog
        open={newdata}
        onClose={async () => {
          await handleNewData(false);
          await setD(null);
          await getData(setData, page, rowsPerPage);
        }}
      >
        <Forma data={d} />
      </Dialog>

      <Paper>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                {header.map((value) => (
                  <TableCell key={value} sx={{ textAlign: "left" }}>
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
                <Fragment key={d._id}>
                  <TableRow key={d._id}>
                    <TableCell>{d?.Age}</TableCell>
                    <TableCell>{d?.SystolicBP}</TableCell>
                    <TableCell>{d?.DiastolicBP}</TableCell>
                    <TableCell>{d?.BS}</TableCell>
                    <TableCell>{d?.BodyTemp}</TableCell>
                    <TableCell>{d?.HeartRate}</TableCell>
                    <TableCell>{d?.RiskLevel}</TableCell>
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
                          await deleteData(d._id);
                          await getData(setData);
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
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={dataLength}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
};
