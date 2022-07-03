import { IconButton } from "@mui/material";
import React, { useContext } from "react";
import { Favorite, Clear } from "@mui/icons-material";
import { GlobalContext } from "../redux/GlobalState";

const DrinkControls = ({ drink, type }) => {
  const { removeDrinkFromFavoriteslist } = useContext(GlobalContext);

  return (
    <div>
      {type === "favoriteslist" && (
        <>
          <IconButton>
            <Favorite />
          </IconButton>
          <IconButton
            sx={{ mr: 2 }}
            onClick={() => removeDrinkFromFavoriteslist(drink.idDrink)}
          >
            <Clear />
          </IconButton>
        </>
      )}
    </div>
  );
};

export default DrinkControls;