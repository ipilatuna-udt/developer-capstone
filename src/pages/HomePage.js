import { Box} from "@mui/material";
import { HomeHero, HomeTestimonials } from "../components/home";
import About from "../components/about/About";

function HomePage() {
  return (
    <Box display="flex" gap={2} flexDirection="column">
      <HomeHero />
      <HomeTestimonials />
      <About />
    </Box>
  );
}

export default HomePage;