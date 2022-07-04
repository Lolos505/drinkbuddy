import React from "react";
import { Routes, Route } from "react-router-dom";
import SingleDrink from "./pages/SingleDrink";
import "./components/styles.css";
import Layout from "./components/Layout";
import Favorites from "./pages/Favorites";
import Homepage from "./pages/Homepage";
import { Tables } from "./pages/Tables";
import { GlobalProvider } from "./redux/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/cocktail/:id" element={<SingleDrink />} />
          <Route path="/tables" element={<Tables />} />
          <Route exact path="/favorites" element={<Favorites />} />
        </Routes>
      </Layout>
    </GlobalProvider>
  );
}

export default App;
