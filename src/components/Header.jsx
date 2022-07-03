import React, { useRef } from "react";
import { fetchSearchCocktail } from "../redux/action";
import { useDispatch } from "react-redux";
import { AppBar, Box, Toolbar, Typography, Paper } from "@mui/material";
import { format } from "date-fns";
import styles from "./styles";
import "./styles.css";
import SearchIcon from "@mui/icons-material/Search";

export default function Header() {
  const searchValue = useRef();

  let dispatch = useDispatch();
  const searchCocktail = () => {
    dispatch(fetchSearchCocktail(searchValue.current.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Box>
      <Paper elevation={6}>
        <AppBar sx={styles.AppBar}>
          <Toolbar>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            >
              Today is the {format(new Date(), "do MMMM Y")}
            </Typography>
            <div className="wrap">
              <div className="search" onSubmit={handleSubmit}>
                <input
                  type="text"
                  id="name"
                  name="name"
                  onChange={searchCocktail}
                  ref={searchValue}
                  className="searchTerm"
                />
                <button type="submit" className="searchButton">
                  <SearchIcon />
                </button>
              </div>
            </div>
          </Toolbar>
        </AppBar>
      </Paper>
    </Box>
  );
}
