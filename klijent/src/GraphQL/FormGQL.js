import React from "react";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { Button, Box, Grid } from "@mui/material";

const header = [
  "Age",
  "SystolicBP",
  "DiastolicBP",
  "BS",
  "BodyTemp",
  "HeartRate",
  "RiskLevel",
];

const FormGQL = ({ data, onClick }) => {
  const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
  const checkedIcon = <CheckBoxIcon fontSize="small" />;

  return (
    <Grid container spacing={2} sx= {{padding:'2%'}}>
      <Grid item xs={8}>
        <Autocomplete
          multiple
          options={header}
          disableCloseOnSelect
          renderOption={(props, option, { selected }) => (
            <li {...props}>
              <Checkbox
                icon={icon}
                checkedIcon={checkedIcon}
                style={{ marginRight: 8 }}
                checked={selected}
              />
              {option}
            </li>
          )}
          renderInput={(params) => (
            <TextField {...params} label=" Search Options" />
          )}
        />
      </Grid>

      <Grid item xs={4} className="cardCenter">
        <Button fullWidth sx={{height:'100%'}}variant="contained" color="secondary">
          Search
        </Button>
      </Grid>
    </Grid>
  );
};

export default FormGQL;
