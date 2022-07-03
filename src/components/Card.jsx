import React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Paper,
} from "@mui/material";
import Text from "./Text";
import Title from "./Title";
import "./styles.css";
import { Link } from "react-router-dom";
import DrinkControls from "./DrinkControls";

const MuiCard = ({
  image,
  category,
  title,
  glass,
  instructions,
  to,
  type,
  drink,
}) => {
  return (
    <Paper elevation={12} sx={{ width: "300px", height: "430px" }}>
      <Card className="card" sx={{ height: "430px", width: "300px" }}>
        <CardMedia component="img" image={image} sx={{ height: "200px" }} />
        <CardContent>
          <Title variant="h5" title={title} />
          <Text variant="h6" text={category} />
          <Text variant="body2" text={glass} sx={{ pb: 2 }} />
          <Text className="ellipsis" variant="body1" text={instructions} />
        </CardContent>
        <CardActions>
          <DrinkControls type={type} drink={drink} />
          <Link to={to} className="readmorelink">
            <Button variant="contained" className="readmorebtn">
              Read More
            </Button>
          </Link>
        </CardActions>
      </Card>
    </Paper>
  );
};

export default MuiCard;
