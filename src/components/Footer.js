import {
  useTheme,
  Box,
  Grid2 as Grid,
  Typography,
  List,
  ListItem,
  Container,
} from "@mui/material";
import { pages } from "../pages/routing";

function Footer() {
  const theme = useTheme();
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.secondary.contrastText,
        p: 2,
        textAlign: "center",
        marginTop: "auto",
      }}
      aria-labelledby="footer-title"
      role="contentinfo"
    >
      <Container>
        <Grid container aria-label="Footer content sections">
          <Grid
            textAlign="left"
            size={{ xs: 12, md: 4 }}
            role="region"
            aria-labelledby="footer-logo"
          >
            <img
              height={128}
              src="/assets/little-lemon-icon.jpg"
              alt="Little Lemon restaurant logo"
              id="footer-logo"
            />
          </Grid>
          <Grid
            textAlign="left"
            size={{ xs: 6, md: 4 }}
            role="region"
            aria-labelledby="footer-navigation"
          >
            <Typography variant="h6" id="footer-navigation">
              Navigation
            </Typography>
            <List aria-label="Page navigation links">
              {pages
                .filter((page) => !page.disabled)
                .map((page) => (
                  <ListItem key={page.href}>
                    <a
                      href={page.href}
                      aria-label={`Navigate to ${page.label}`}
                    >
                      {page.label}
                    </a>
                  </ListItem>
                ))}
            </List>
          </Grid>
          <Grid
            textAlign="left"
            size={{ xs: 6, md: 4 }}
            role="region"
            aria-labelledby="footer-contact"
          >
            <Typography variant="h6" id="footer-contact">
              Contact
            </Typography>
            <List aria-label="Contact information">
              <ListItem>
                <Typography aria-label="Phone number">123-456-7890</Typography>
              </ListItem>
              <ListItem>
                <Typography>
                  <a
                    href="mailto:little-lemon@example.com"
                    aria-label="Email Little Lemon restaurant"
                  >
                    little-lemon@example.com
                  </a>
                </Typography>
              </ListItem>
            </List>
          </Grid>
        </Grid>
        <p aria-hidden="true">© 2024</p>
      </Container>
    </Box>
  );
}

export default Footer;
