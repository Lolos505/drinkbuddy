import React from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Checkbox,
  Grid,
} from "@mui/material";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import styles from "./styles";
import Text from "./Text";
import Title from "./Title";
import "./styles.css";
import { Link } from "react-router-dom";
import { toggleFavourite } from "../redux/action";

const DrinkCard = ({ image, category, title, glass, instructions, to }) => {
  return (
    <Card sx={styles.cards}>
      <Box sx={styles.box}>
        <CardMedia sx={styles.cardMedia} component="img" image={image} />
      </Box>
      <CardContent sx={styles.cardContent}>
        <Title variant="h6" title={title} sx={styles.cardContentTitle} />
        <Text variant="body1" text={category} sx={styles.categoryText} />
        <Text variant="body1" text={glass} sx={styles.glassText} />
        <Text className="ellipsis" variant="body2" text={instructions} />
      </CardContent>
      <CardActions>
        <Button
          aria-label="add to favorites"
          // onClick={console.log("Added to Favourites")}
        >
          <Checkbox
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite sx={{ color: "red" }} />}
          />
        </Button>
        <Grid sx={styles.linkButton}>
          <Link to={to}>
            <Button variant="contained">Read More</Button>
          </Link>
        </Grid>
      </CardActions>
    </Card>
  );
};

export default DrinkCard;
