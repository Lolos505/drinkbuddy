import React, { useState } from "react";
import { Chart as ChartJs, Tooltip, Title, ArcElement, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { Grid, Paper } from "@mui/material";
import MuiTable from "./components/MuiTable";

ChartJs.register(Tooltip, Title, ArcElement, Legend);

const Charts = () => {
  const [drinksData] = useState({
    labels: [
      "Ordinary Drink",
      "Cocktail",
      "Shot",
      "Coffee / Tea",
      "Punch / Party Drink",
    ],
    datasets: [
      {
        label: "Drinks Categories",
        data: [10, 6, 3, 4, 2],
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
          "rgb(90, 60, 200)",
          "rgb(10, 205, 86)",
        ],
        hoverOffset: 8,
      },
    ],
  });

  return (
    <Grid container spacing={2} justifyContent="center">
      <Grid item xs={8}>
        <MuiTable />
      </Grid>
      <Grid item>
        <Pie data={drinksData} />
      </Grid>
    </Grid>
  );
};

export default Charts;
