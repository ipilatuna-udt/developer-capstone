import { AppBar, Box, Button } from "@mui/material";
import { pages } from "../pages/routing";

const HeaderLogo = () => (
  <Button
    href="/"
    variant="outlined"
    aria-label="Little Lemon Restaurant"
    sx={{ background: "white", p: 1 }}
  >
    <img
      src="/assets/little-lemon-header.jpg"
      alt="Little Lemon Restaurant logo"
      height={48}
      aria-label="Little Lemon Restaurant"
    />
  </Button>
);

function Header() {
  return (
    <header>
      <AppBar position="static">
        <Box
          component="nav"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
          <HeaderLogo />
          <Box
            sx={{
              display: "inline-flex",
              p: 1,
              flexWrap: "wrap",
            }}
          >
            {pages.map((page) => (
              <Button key={page.href} href={page.href} variant="contained">
                {page.label}
              </Button>
            ))}
          </Box>
        </Box>
      </AppBar>
    </header>
  );
}

export default Header;
