import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React, { useContext } from "react";
import { GlobalContext } from "../redux/GlobalState";
import "./styles.css";

export const ResultCard = ({ drink }) => {
  const { addDrinkToFavoriteslist, favoriteslist } = useContext(GlobalContext);

  let storedDrink = favoriteslist.find((o) => o.idDrink === drink.idDrink);

  const favoriteslistDisabled = storedDrink ? true : false;

  return (
    <Grid container justifyContent="center" sx={{ mt: 6, mb: 10 }}>
      <Grid item xs={8}>
        <Grid item sx={{ mr: 2 }}>
          {drink.strDrinkThumb ? (
            <Card sx={{ height: 400, width: 300 }}>
              <CardMedia
                sx={{ height: 200 }}
                image={drink.strDrinkThumb}
                alt={`${drink.strDrink} poster`}
              />
              <CardContent>
                <Typography variant="h5">{drink.strDrink}</Typography>
                <Typography>{drink.strGlass}</Typography>
                <Typography>{drink.strCategory}</Typography>
                <Typography className="ellipsis">
                  {drink.strInstructions}
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: "center" }}>
                <Button
                  variant="contained"
                  disabled={favoriteslistDisabled}
                  className="btn"
                  onClick={() => addDrinkToFavoriteslist(drink)}
                >
                  Add to favorites
                </Button>
              </CardActions>
            </Card>
          ) : (
            <div className="filler-poster"></div>
          )}
        </Grid>
      </Grid>
    </Grid>
  );
};
