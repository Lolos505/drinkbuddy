import { Grid } from "@mui/material";
import React from "react";
import CardList from "../components/CardList";
import "../components/styles.css";

const Homepage = () => {
  return (
    <Grid container justifyContent="center">
      <Grid item xs={8}>
        <CardList />
      </Grid>
    </Grid>
  );
};

export default Homepage;
