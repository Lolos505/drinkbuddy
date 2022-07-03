import React from "react";
import {
  Box,
  Drawer,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import Header from "./Header";
import { DonutSmall, Favorite, Home } from "@mui/icons-material";
import { Link, useLocation } from "react-router-dom";
import "./styles.css";
import Image from "../images/1.jpg";

const drawerWidth = 240;

const classes = {
  page: {
    width: "100%",
  },
  drawer: {
    width: drawerWidth,
    ".MuiDrawer-paper": {
      width: drawerWidth,
      backgroundImage: `url(${Image})`,
    },
  },
  drawerPaper: {
    width: drawerWidth,
  },
  active: {
    background: "rgba(255, 255, 255, 0.2)",
  },
  toolbar: {
    height: "64px",
  },
};

export default function Layout({ children }) {
  const location = useLocation();

  const menuItems = [
    {
      text: "Home",
      icon: <Home />,
      path: "/",
    },
    {
      text: "Favorites",
      icon: <Favorite />,
      path: "/favorites",
    },
    {
      text: "Tables",
      icon: <DonutSmall />,
      path: "/tables",
    },
  ];

  return (
    <div className="root">
      {/* Header component */}
      <Header />

      {/* Side Drawer component */}
      <Drawer sx={classes.drawer} variant="permanent" anchor="left">
        <Grid align="center" sx={{ mt: 2 }}>
          <Typography variant="h5" sx={{ color: "white" }}>
            Drink Buddy
          </Typography>
        </Grid>

        {/* list and links */}
        <List sx={{ mt: 1 }}>
          {menuItems.map((item) => (
            <ListItem
              button
              key={item.text}
              component={Link}
              to={item.path}
              sx={location.pathname === item.path ? classes.active : null}
            >
              <ListItemIcon sx={{ color: "white" }}>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} sx={{ color: "white" }} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <div className={classes.page}>
        <Box sx={classes.toolbar}></Box>
        {children}
      </div>
    </div>
  );
}
