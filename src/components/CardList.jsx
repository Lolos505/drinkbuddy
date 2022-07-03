import { Box, Grid, Paper, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCocktail } from "../redux/action";
import MuiCard from "./Card";
import Image from "../../src/images/404.jpg";

const CardList = ({ initialCards = 24 }) => {
  const { cocktails } = useSelector((state) => ({ ...state.data }));
  const [modifiedCocktail, setModifiedCocktail] = useState([]);

  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCocktail());
  }, [dispatch]);

  useEffect(() => {
    if (cocktails) {
      const newCocktails = cocktails.map((item) => {
        const {
          idDrink,
          strDrink,
          strDrinkThumb,
          strAlcoholic,
          strGlass,
          strCategory,
          strInstructions,
        } = item;
        return {
          id: idDrink,
          name: strDrink,
          image: strDrinkThumb,
          alcoholic: strAlcoholic,
          glass: strGlass,
          category: strCategory,
          instructions: strInstructions,
        };
      });
      setModifiedCocktail(newCocktails);
    } else {
      setModifiedCocktail([]);
    }
  }, [cocktails]);

  if (!cocktails) {
    return (
      <Box sx={{ ml: "120%", mt: 10 }}>
        <Grid item>
          <Paper
            sx={{
              backgroundImage: `url(${Image})`,
              width: "774px",
              height: "529px",
              backgroundColor: "transparent",
              boxShadow: "0",
            }}
          />
        </Grid>
      </Box>
    );
  }

  return (
    <Box>
      <Grid align="center" sx={{ mt: 5 }}>
        <Typography variant="h1" className="text">
          Pick your poison!
        </Typography>
      </Grid>
      <Grid
        container
        sx={{ mb: 10, mt: 10 }}
        spacing={5}
        justifyContent="center"
      >
        {modifiedCocktail.slice(0, initialCards).map((item) => {
          const { id, name, image, glass, category, instructions } = item;
          return (
            <Grid item key={id}>
              <MuiCard
                image={image}
                title={name}
                category={category}
                glass={glass}
                instructions={instructions}
                to={`/cocktail/${id}`}
              />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default CardList;
