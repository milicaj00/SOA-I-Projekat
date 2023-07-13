import React from "react";
import { Data } from "./gRPC/data_pb";
import { Box, Typography, TextField, Button, MenuItem } from "@mui/material";
import { addData, changeData } from "./REST api/api";

const categories = ["low risk", "mid risk", "high risk"];

const Forma = ({ data, client }) => {
  return (
    <Box
      className="cardCenter marginS"
      sx={{ gap: "1vh", padding: { sm: "10% 10%" }, alignItems: "stretch" }}
    >
      {console.log(data)}
      <Typography className="cardCenter" variant="h4">
        {data === null ? "New Data" : "Modify Data"}
      </Typography>
      <Box
        component="form"
        onSubmit={(event) => {
          event.preventDefault();
          const formData = event.target;
          if (!client) {
            const new_data = {
              Age: formData.Age.value,
              SystolicBP: formData.SystolicBP.value,
              DiastolicBP: formData.DiastolicBP.value,
              BS: formData.BS.value,
              BodyTemp: formData.BodyTemp.value,
              HeartRate: formData.HeartRate.value,
              RiskLevel: formData.RiskLevel.value,
            };
            if (data) {
              changeData(new_data, data._id);
            } else {
              addData(new_data);
            }
          } else {
            const request = new Data();
            request.setSystolicbp(formData.SystolicBP.value);
            request.setDiastolicbp(formData.DiastolicBP.value);
            request.setAge(formData.Age.value);
            request.setBs(formData.BS.value);
            request.setRisklevel(formData.RiskLevel.value);
            request.setHeartrate(formData.HeartRate.value);
            request.setBodytemp(formData.BodyTemp.value);
            request.setId("");
            request.setV(0);

            if (data) {
              console.log(data);
              request.setId(data.id);
              client.updateData(request, {}, (err, response) => {
                if (err) {
                  console.error("Error:", err);
                } else {
                  alert("successfully updated data");
                  console.log("Response:", response.toObject());
                }
              });
            } else {
              client.addData(request, {}, (err, response) => {
                if (err) {
                  console.error("Error:", err);
                } else {
                  alert("successfully added data");
                  console.log("Response:", response.toObject());
                }
              });
            }
          }
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
          defaultValue={data === null ? "" : data.Age || data.age}
        />

        <TextField
          margin="dense"
          fullWidth
          name="SystolicBP"
          label="Systolic BP"
          type="number"
          color="primary"
          size="small"
          defaultValue={data === null ? "" : data.SystolicBP || data.systolicbp}
        />

        <TextField
          margin="dense"
          fullWidth
          name="DiastolicBP"
          label="Diastolic BP"
          type="number"
          color="primary"
          size="small"
          defaultValue={data === null ? "" : data.DiastolicBP || data.diastolicbp}
        />

        <TextField
          margin="dense"
          fullWidth
          name="BS"
          label="BS"
          type="number"
          color="primary"
          size="small"
          defaultValue={data === null ? "" : data.BS|| data.bs} 
        />

        <TextField
          margin="dense"
          fullWidth
          name="BodyTemp"
          label="Body Temp"
          type="number"
          color="primary"
          size="small"
          defaultValue={data === null ? "" : data.BodyTemp || data.bodytemp}
        />

        <TextField
          margin="dense"
          fullWidth
          name="HeartRate"
          label="Heart Rate"
          type="number"
          color="primary"
          size="small"
          defaultValue={data === null ? "" : data.HeartRate || data.heartrate}
        />

        <TextField
          margin="dense"
          fullWidth
          size="small"
          name="RiskLevel"
          variant="outlined"
          select
          defaultValue={data === null ? -1 : data.RiskLevel || data.risklevel}
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
