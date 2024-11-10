import { Box, Container, Grid2 as Grid, Typography } from "@mui/material";
import { Title } from "../components";
import { homeDescription } from "../components/about";

function AboutPage() {
  return (
    <Container aria-labelledby="about-page-heading">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          p: 2,
        }}
        aria-labelledby="about-page-heading"
        role="main"
      >
        <Title title="About Us" id="about-page-heading" />
        <Grid container spacing={2} role="region" aria-label="About Us Content">
          <Grid
            size={{ xs: 12, md: 6, lg: 8 }}
            role="region"
            aria-labelledby="about-description"
          >
            <Typography variant="h6" id="about-description">
              {homeDescription}
            </Typography>
            <Typography variant="h6">{homeDescription}</Typography>
            <Typography variant="h6">{homeDescription}</Typography>
          </Grid>
          <Grid
            size={{ xs: 12, md: 6, lg: 4 }}
            role="complementary"
            aria-label="Owner's image"
          >
            <Box>
              <img
                className="about-image"
                src="/assets/home/little-lemon-owner.jpg"
                alt="Restaurant owner"
                aria-describedby="about-image-description"
              />
              <Typography
                variant="body2"
                id="about-image-description"
                aria-hidden="true"
              >
                Little Lemon Restaurant owner 
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default AboutPage;
