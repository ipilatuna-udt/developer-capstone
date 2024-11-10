import { Box, Container, Grid2 as Grid, Typography } from "@mui/material";
import { Title } from "../components";
import { homeDescription } from "../components/about";

function AboutPage() {
  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          p: 2,
        }}
        aria-label="Bookings page"
        role="main"
      >
        <Title title="About Us" />
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, md: 6, lg: 8 }}>
            <Typography variant="h6">{homeDescription}</Typography>
            <Typography variant="h6">{homeDescription}</Typography>
            <Typography variant="h6">{homeDescription}</Typography>
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
      </Box>
    </Container>
  );
}

export default AboutPage;
