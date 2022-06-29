import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchSingleCocktail } from "./redux/action";
import { useSelector, useDispatch } from "react-redux";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import "./components/styles.css";

const SingleCocktail = () => {
  const { cocktail, loading } = useSelector((state) => ({ ...state.data }));
  const [modifiedCocktail, setModifiedCocktail] = useState(null);
  const { id } = useParams();
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSingleCocktail(id));
  }, [id]);

  useEffect(() => {
    if (cocktail.length > 0) {
      const {
        strDrink: name,
        strDrinkThumb: image,
        strCategory: category,
        strGlass: glass,
        strInstructions: instructions,
        strIngredient1,
        strIngredient2,
        strIngredient3,
        strIngredient4,
        strIngredient5,
      } = cocktail[0];
      const ingredients = [
        strIngredient1,
        strIngredient2,
        strIngredient3,
        strIngredient4,
        strIngredient5,
      ];
      const newCocktail = {
        name,
        image,
        category,
        glass,
        instructions,
        ingredients,
      };
      setModifiedCocktail(newCocktail);
    } else {
      setModifiedCocktail(null);
    }
  }, [id, cocktail]);

  if (!modifiedCocktail) {
    return <h2>No Cocktail to display</h2>;
  } else {
    const { name, image, category, glass, instructions, ingredients } =
      modifiedCocktail;
    return (
      <>
        {loading ? (
          <div className="spinner-grow" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        ) : (
          <Grid container className="gobackbutton">
            <Grid item>
              <Card sx={{ width: 900, mt: "20px", maxHeight: 1400 }}>
                <CardMedia component="img" height="600" image={image} />
                <CardContent>
                  <Typography gutterBottom variant="h3" component="div">
                    Name: {name}
                  </Typography>
                  <Typography gutterBottom variant="h4" component="div">
                    Category: {category}
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{ mb: "20px" }}
                  >
                    Glass: {glass}
                  </Typography>
                  <Typography
                    variant="h6"
                    color="text.secondary"
                    sx={{ mb: "20px" }}
                  >
                    Instructions: {instructions}
                  </Typography>
                  <Grid>
                    <Typography
                      variant="h6"
                      color="text.secondary"
                      sx={{ mb: "20px" }}
                    >
                      <p>
                        <span>Ingredients: </span>
                        {ingredients.map((item, index) => {
                          return item ? <span key={index}>{item}</span> : null;
                        })}
                      </p>
                    </Typography>
                  </Grid>
                </CardContent>
                <CardActions sx={{ justifyContent: "center" }}>
                  <Link to="/">
                    <Button variant="contained">Go Back</Button>
                  </Link>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        )}
      </>
    );
  }
};

export default SingleCocktail;
