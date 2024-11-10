import { Box} from "@mui/material";
import { HomeAboutSection, HomeHeroSection, HomeTestimonialsSection, HomeSpecialsSection } from "../components/home";

function HomePage() {
  return (
    <Box display="flex" gap={2} flexDirection="column">
      <HomeHeroSection />
      <HomeSpecialsSection />
      <HomeTestimonialsSection />
      <HomeAboutSection />
    </Box>
  );
}

export default HomePage;