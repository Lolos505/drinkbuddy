import React from "react";
import Sidebar from "./components/Sidebar";
import { Box, Stack } from "@mui/material";
import Navbar from "./components/Navbar";
import Home from "./Home";
import { Routes, Route } from "react-router-dom";
import SingleCocktail from "./SingleCocktail";
import Charts from "./Charts";
import Favorites from "./Favorites";

function App() {
  return (
    <Box>
      <Navbar />
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cocktail/:id" element={<SingleCocktail />} />
          <Route path="Charts" element={<Charts />} />
          <Route path="Favorites" element={<Favorites />} />
        </Routes>
      </Stack>
    </Box>
  );
}

export default App;
