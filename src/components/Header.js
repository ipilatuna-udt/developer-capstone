import { AppBar, Box, Button } from "@mui/material";
import { pages } from "../pages/routing";

const HeaderLogo = () => (
  <Button
    href="/"
    variant="outlined"
    aria-label="Little Lemon Restaurant homepage"
    sx={{ background: "white", p: 1 }}
  >
    <img
      src="/assets/little-lemon-header.jpg"
      alt="Little Lemon Restaurant logo"
      height={48}
    />
  </Button>
);

function Header() {
  const currentPath = window.location.pathname;

  return (
    <header role="banner">
      <AppBar position="static">
        <Box
          component="nav"
          aria-label="Primary Navigation"
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
              <Button
                key={page.href}
                href={page.href}
                variant="contained"
                aria-label={page.label}
                aria-current={currentPath === page.href ? "page" : undefined}
              >
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
