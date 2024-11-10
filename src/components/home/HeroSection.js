import React from "react";
import { Typography, Button, Grid2 as Grid } from "@mui/material";
import "./Hero.css";
import HomeSection from "./HomeSection";

function HeroSection() {
  const bodyText =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula condimentum massa, et pellentesque lectus porttitor ut. Suspendisse interdum, nunc quis blandit egestas, purus odio iaculis erat, varius semper ex orci vitae nulla. Nam pretium turpis magna, a auctor diam convallis eu. Nunc faucibus nibh eget placerat rutrum. Quisque quis erat volutpat, egestas velit vel, dictum risus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.";
  return (
    <HomeSection background="black" color="white">
      <Grid
        container
        spacing={4}
        sx={{
          p: 4,
        }}
      >
        <Grid
          size={{ xs: 12, md: 8 }}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            padding: 2,
          }}
        >
          <Typography variant="h1">Little Lemon Restaurant</Typography>
          <Typography variant="h2">Chicago</Typography>
          <Typography variant="body1">{bodyText}</Typography>
          <Button
            variant="contained"
            color="secondary"
            href="/bookings"
            size="large"
          >
            Book a Table
          </Button>
        </Grid>
        <Grid
          size={{
            xs: 12,
            md: 4,
          }}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            className="hero-image"
            src="../../assets/home/little-lemon-restaurant.jpg"
            alt="restaurant"
          />
        </Grid>
      </Grid>
    </HomeSection>
  );
}

export default HeroSection;
