import * as React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Text from "./components/Text";

export default function Favorites() {
  const [spacing, setSpacing] = React.useState(2);

  return (
    <Grid sx={{ flexGrow: 1 }} container spacing={2}>
      <Grid container justifyContent="center" sx={{ mt: 5, mb: 3 }}>
        <Text text="My favorite drinks list" variant="h4" />
      </Grid>
      <Grid item xs={12}>
        <Grid container justifyContent="center" spacing={spacing}>
          {[0, 1, 2, 3, 4, 5, 6].map((value) => (
            <Grid key={value} item>
              <Paper
                sx={{
                  height: 140,
                  width: 100,
                  backgroundColor: (theme) =>
                    theme.palette.mode === "dark" ? "#1A2027" : "#fff",
                }}
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}
