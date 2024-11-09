import React from "react";
import { Typography } from "@mui/material";

export function Title({ title }) {
  return (
    <Typography
      variant="h2"
      sx={{
        color: "white",
        textShadow: "2px 2px 8px rgba(0, 0, 0, 0.5)",
        WebkitTextStroke: "2px black",
        fontWeight: "bold",
        textAlign: "center",
      }}
    >
      {title}
    </Typography>
  );
}
export default Title;
