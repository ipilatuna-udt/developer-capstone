import { Grid2 as Grid } from "@mui/material";
import { HomeHero } from "../components/home";

function HomePage() {
  return (
    <Grid container spacing={2}>
      <HomeHero />
    </Grid>
  );
}

export default HomePage;