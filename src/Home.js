import { Box } from "@mui/material";
import React from "react";
import CocktailList from "./components/CocktailList";
import SearchInput from "./components/SearchInput";

const Home = () => {
  return (
    <Box>
      <SearchInput />
      <CocktailList />
    </Box>
  );
};

export default Home;
