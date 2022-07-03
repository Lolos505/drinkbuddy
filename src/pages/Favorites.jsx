import React, { useContext } from "react";
import MuiCard from "../components/Card";
import { GlobalContext } from "../redux/GlobalState";
import { Grid } from "@mui/material";

const Favorites = () => {
  const { favoriteslist } = useContext(GlobalContext);

  return (
    <div className="movie-page">
      <div className="container">
        <div className="header">
          <h1 className="heading">My favorite drinks list</h1>
        </div>
        {favoriteslist.length > 0 ? (
          <Grid container spacing={4}>
            {favoriteslist.map((drink) => (
              <Grid item key={drink.idDrink}>
                <MuiCard
                  type="favoriteslist"
                  image={drink.strDrinkThumb}
                  category={drink.strCategory}
                  title={drink.strDrink}
                  glass={drink.strGlass}
                  instructions={drink.strInstructions}
                  to={`/cocktail/${drink.idDrink}`}
                />
              </Grid>
            ))}
          </Grid>
        ) : (
          <h2>No drinks in your list, add some!</h2>
        )}
      </div>
    </div>
  );
};

export default Favorites;
