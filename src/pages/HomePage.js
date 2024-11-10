import { Box} from "@mui/material";
import { HomeHero, HomeTestimonials } from "../components/home";

function HomePage() {
  return (
    <Box display="flex" gap={2} flexDirection="column">
      <HomeHero />
      <HomeTestimonials />
    </Box>
  );
}

export default HomePage;