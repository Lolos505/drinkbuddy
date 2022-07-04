import { IconButton } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Favorite, Clear } from "@mui/icons-material";
import { removeFromFavourites } from "../redux/action";
import { useDispatch, useSelector } from "react-redux";

const DrinkControls = ({ type }) => {
  const { cocktails } = useSelector((state) => ({ ...state.data }));
  const [modifiedCocktail, setModifiedCocktail] = useState([]);

  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(removeFromFavourites());
  }, [dispatch]);

  useEffect(() => {
    if (cocktails) {
      const newCocktails = cocktails.map((item) => {
        const { idDrink } = item;
        return {
          id: idDrink,
        };
      });
      setModifiedCocktail(newCocktails);
    } else {
      setModifiedCocktail([]);
    }
  }, [cocktails]);

  return (
    <div>
      {type === "favoriteslist" && (
        <>
          <IconButton>
            <Favorite />
          </IconButton>
          <IconButton
            sx={{ mr: 2 }}
            onClick={() => removeFromFavourites(cocktails.id)}
          >
            <Clear />
          </IconButton>
        </>
      )}
    </div>
  );
};

export default DrinkControls;
