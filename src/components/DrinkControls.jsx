import { IconButton } from "@mui/material";
import React, { useContext } from "react";
import { Favorite, Clear } from "@mui/icons-material";
import { GlobalContext } from "../redux/GlobalState";

const DrinkControls = ({ drink, type }) => {
  const { removeFromFavorites } = useContext(GlobalContext);

  return (
    <div>
      {type === "favoriteslist" && (
        <>
          <IconButton>
            <Favorite />
          </IconButton>
          <IconButton
            sx={{ mr: 2 }}
            onClick={() => removeFromFavorites(drink.id)}
          >
            <Clear />
          </IconButton>
        </>
      )}
    </div>
  );
};

export default DrinkControls;
