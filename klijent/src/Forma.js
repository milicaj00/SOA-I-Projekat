import React from "react";

import { Box, Typography, TextField, Button, MenuItem } from "@mui/material";

const categories = ["low risk", "mid risk", "high risk"];

const Forma = () => {
  return (
    <Box
      className="cardCenter marginS"
      sx={{ gap: "1vh", padding: { sm: "10% 10%" }, alignItems: "stretch" }}
    >
      <Typography className="cardCenter" variant="h4">
        New Data
      </Typography>
      <Box
        component="form"
        // onSubmit={(event) => {
        // }}
      >
        <TextField
          margin="dense"
          fullWidth
          name="age"
          label="Age"
          type="number"
          color="primary"
          size="small"
        />

        <TextField
          margin="dense"
          fullWidth
          name="systolicbp"
          label="Systolic BP"
          type="number"
          color="primary"
          size="small"
        />

        <TextField
          margin="dense"
          fullWidth
          name="diastolicbp"
          label="Diastolic BP"
          type="number"
          color="primary"
          size="small"
        />

        <TextField
          margin="dense"
          fullWidth
          name="bs"
          label="BS"
          type="number"
          color="primary"
          size="small"
        />

        <TextField
          margin="dense"
          fullWidth
          name="bodytemp"
          label="Body Temp"
          type="number"
          color="primary"
          size="small"
        />

        <TextField
          margin="dense"
          fullWidth
          name="heartrate"
          label="Heart Rate"
          type="number"
          color="primary"
          size="small"
        />

        <TextField
          margin="dense"
          fullWidth
          size="small"
          name="risklevel"
          variant="outlined"
          select
          defaultValue={-1}
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
          Add data
        </Button>
      </Box>
    </Box>
  );
};

export default Forma;
