import React, { useEffect, useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { Box } from "@mui/material";
import { getData } from "./REST api/api.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const Main = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData(setData);
  }, []);

  return (
    <Box>
      <p>POCETNA</p>
    </Box>
  );
};

export default Main;
