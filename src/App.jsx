import React, { createContext, useState } from "react";
import { Routes, Route } from "react-router-dom";
import SingleDrink from "./pages/SingleDrink";
import "./components/styles.css";
import Layout from "./components/Layout";
import Favorites from "./pages/Favorites";
import Homepage from "./pages/Homepage";
import { Tables } from "./pages/Tables";
import { GlobalProvider } from "./redux/GlobalState";

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <GlobalProvider id={theme}>
        <Layout>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/cocktail/:id" element={<SingleDrink />} />
            <Route path="/tables" element={<Tables />} />
            <Route exact path="/favorites" element={<Favorites />} />
          </Routes>
        </Layout>
      </GlobalProvider>
    </ThemeContext.Provider>
  );
}

export default App;
