import React from "react";
import Typography from "@mui/material/Typography";

export default function Title({ variant, title, ...props }) {
  return (
    <Typography variant={variant} {...props}>
      {title}
    </Typography>
  );
}
