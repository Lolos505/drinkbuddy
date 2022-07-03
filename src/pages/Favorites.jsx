import React, { useContext } from "react";
import MuiCard from "../components/Card";
import { GlobalContext } from "../redux/GlobalState";
import { Grid, Typography } from "@mui/material";
import "../components/styles.css";

const Favorites = () => {
  const { favoriteslist } = useContext(GlobalContext);

  return (
    <Grid container justifyContent="center" spacing={20}>
      <Grid item xs={8}>
        <Typography
          sx={{ textAlign: "center", mt: 5, mb: 6 }}
          variant="h2"
          className="text"
        >
          My favorite drinks list
        </Typography>

        {favoriteslist.length > 0 ? (
          <Grid container spacing={4} sx={{ mb: 8 }}>
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
      </Grid>
    </Grid>
  );
};

export default Favorites;
