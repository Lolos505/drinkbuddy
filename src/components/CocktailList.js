import { Box, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCocktail } from "../redux/action";
import DrinkCard from "./DrinkCard";

const CocktailList = () => {
  const { cocktails, loading } = useSelector((state) => ({ ...state.data }));
  const [modifiedCocktail, setModifiedCocktail] = useState([]);

  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCocktail());
  }, []);

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

  if (loading) {
    return (
      <div className="spinner-grow" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    );
  }

  if (!cocktails) {
    return <h2>No Cocktails matched your search criteria</h2>;
  }

  return (
    <Grid container spacing={3} justifyContent="center">
      {modifiedCocktail.map((item) => {
        const { id, name, image, glass, category, instructions } = item;
        return (
          <Grid item key={id}>
            <DrinkCard
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
  );
};

export default CocktailList;
