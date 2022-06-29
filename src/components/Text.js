import React from "react";
import Typography from "@mui/material/Typography";

export default function Text({ variant, text, ...props }) {
  return (
    <Typography variant={variant} {...props}>
      {text}
    </Typography>
  );
}
