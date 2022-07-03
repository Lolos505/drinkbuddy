import { Box, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import { ResultCard } from "../components/ResultCard";
import "../components/styles.css";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export const Tables = () => {
  const [query, setQuery] = useState("");
  const [drinks, setDrinks] = useState([]);

  const onChange = (e) => {
    e.preventDefault();
    setQuery(e.target.value);
    fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s&query=${e.target.value}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (!data.errors) {
          setDrinks(data.drinks);
        } else {
          setDrinks([]);
        }
      });
  };

  return (
    <Box>
      <Grid container>
        <Grid item sx={{ pl: 10, mt: 5 }}>
          <Typography variant="h6">
            Search for your favorite cocktail and add it to your favorites list:
          </Typography>
        </Grid>
        <Grid item sx={{ mt: 5, ml: 5 }}>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              type="text"
              placeholder="Search for a drink"
              value={query}
              onChange={onChange}
            ></StyledInputBase>
          </Search>
        </Grid>
        {drinks.length > 0 && (
          <Grid container justifyContent="center">
            {drinks.map((drink) => (
              <Grid item key={drink.idDrink}>
                <ResultCard drink={drink} />
              </Grid>
            ))}
          </Grid>
        )}
      </Grid>
    </Box>
  );
};
