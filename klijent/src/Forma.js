import React from "react";

import { Box, Typography, TextField, Button, MenuItem } from "@mui/material";
import { addData, updateData } from "./REST api/api";

const categories = ["low risk", "mid risk", "high risk"];

const Forma = ({ data }) => {
  return (
    <Box
      className="cardCenter marginS"
      sx={{ gap: "1vh", padding: { sm: "10% 10%" }, alignItems: "stretch" }}
    >
      <Typography className="cardCenter" variant="h4">
        {data === null ? "New Data" : "Modify Product"}
      </Typography>
      <Box
        component="form"
        onSubmit={(event) => {
          product === null ? addData(event) : updateData(event, data._id);
        }}
      >
        <TextField
          margin="dense"
          fullWidth
          name="Age"
          label="Age"
          type="number"
          color="primary"
          size="small"
          defaultValue={data === null ? "" : data.Age}
        />

        <TextField
          margin="dense"
          fullWidth
          name="SystolicBP"
          label="Systolic BP"
          type="number"
          color="primary"
          size="small"
          defaultValue={data === null ? "" : data.SystolicBP}
        />

        <TextField
          margin="dense"
          fullWidth
          name="DiastolicBP"
          label="Diastolic BP"
          type="number"
          color="primary"
          size="small"
          defaultValue={data === null ? "" : data.DiastolicBP}
        />

        <TextField
          margin="dense"
          fullWidth
          name="BS"
          label="BS"
          type="number"
          color="primary"
          size="small"
          defaultValue={data === null ? "" : data.BS}
        />

        <TextField
          margin="dense"
          fullWidth
          name="BodyTemp"
          label="Body Temp"
          type="number"
          color="primary"
          size="small"
          defaultValue={data === null ? "" : data.BodyTemp}
        />

        <TextField
          margin="dense"
          fullWidth
          name="HeartRate"
          label="Heart Rate"
          type="number"
          color="primary"
          size="small"
          defaultValue={data === null ? "" : data.HeartRate}
        />

        <TextField
          margin="dense"
          fullWidth
          size="small"
          name="risklevel"
          variant="outlined"
          select
          defaultValue={data === null ? -1 : data.RiskLevel}
        >
          {categories.map((c) => (
            <MenuItem key={c} value={c}>
              {c}
            </MenuItem>
          ))}
          <MenuItem key={-1} value={-1} sx={{ display: "none" }}>
            Risk Level
          </MenuItem>
        </TextField>

        <Button
          fullWidth
          sx={{ mt: "1vh" }}
          size="small"
          variant="contained"
          type="submit"
        >
          {data === null ? " Add New Data" : "Modify Data"}
        </Button>
      </Box>
    </Box>
  );
};

export default Forma;
