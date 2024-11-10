import React from "react";
import HomeSection from "../home/HomeSection";
import { Box, Grid2 as Grid, Typography } from "@mui/material";
import "./About.css";

const description = `
              Little Lemon Restaurant is a family-owned restaurant in Chicago.
              We serve the best food in town, and we are proud of our excellent
              service. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Sed vehicula condimentum massa, et pellentesque lectus porttitor ut. 
              Suspendisse interdum, nunc quis blandit egestas, purus odio iaculis erat, varius semper ex orci vitae nulla. 
              Nam pretium turpis magna, a auctor diam convallis eu. Nunc faucibus nibh eget placerat rutrum. Quisque quis erat volutpat, egestas velit vel, dictum risus. 
              Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
`;

function About() {
  return (
    <HomeSection background="darkgray">
      <Grid container spacing={2}>
        <Grid
          size={{ xs: 12, md: 6, lg: 8 }}
          sx={{
            display: "flex",
            justifyItems: "center",
            justifyContent: "space-around",
            flexDirection: "column",
          }}
        >
          <Box>
            <Typography variant="h3">About Us</Typography>
            <Typography variant="h6">{description}</Typography>
          </Box>
        </Grid>
        <Grid size={{ xs: 12, md: 6, lg: 4 }}>
          <Box>
            <img
              className="about-image"
              src="/assets/home/little-lemon-owner.jpg"
              alt="restaurant bar"
            />
          </Box>
        </Grid>
      </Grid>
    </HomeSection>
  );
}

export default About;
