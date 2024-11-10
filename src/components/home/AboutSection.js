import React from "react";
import HomeSection from "./HomeSection";
import { Box, Grid2 as Grid, Typography } from "@mui/material";
import "./AboutSection.css";
import description from "../about/description";


function AboutSection() {
  return (
    <HomeSection aria-labelledby="about-section-title">
      <Grid container spacing={2} role="region" aria-labelledby="about-section-title">
        <Grid
          size={{ xs: 12, md: 6, lg: 8 }}
          sx={{
            display: "flex",
            justifyItems: "center",
            justifyContent: "space-around",
            flexDirection: "column",
          }}
          role="region"
          aria-labelledby="about-description"
        >
          <Box>
            <Typography variant="h3" id="about-section-title">About Us</Typography>
            <Typography variant="h6" id="about-description">
              {description}
            </Typography>
          </Box>
        </Grid>
        <Grid size={{ xs: 12, md: 6, lg: 4 }} role="complementary" aria-label="Restaurant Owner Image">
          <Box>
            <img
              className="about-image"
              src="/assets/home/little-lemon-owner.jpg"
              alt="Restaurant owner at Little Lemon"
              aria-describedby="image-description"
            />
            <Typography
              variant="body2"
              id="image-description"
              aria-hidden="true"
            >
              This image shows the owner of Little Lemon Restaurant.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </HomeSection>
  );
}

export default AboutSection;
