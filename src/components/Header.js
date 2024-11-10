import { AppBar, Box, Button, Tooltip } from "@mui/material";
import { pages } from "../pages/routing";

const HeaderLogo = () => (
  <Button
    href="/"
    variant="outlined"
    aria-label="Little Lemon Restaurant homepage"
    sx={{ background: "white", p: 1 }}
    role="button"
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
            px: 10
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
              <Tooltip
                key={page.href}
                title={page.disabled ? "Coming soon" : ""}
                placement="bottom"
              >
                <span>
                  <Button
                    key={page.href}
                    href={page.href}
                    variant="contained"
                    size="large"
                    aria-label={page.label}
                    aria-current={
                      currentPath === page.href ? "page" : undefined
                    }
                    disabled={page.disabled}
                    aria-disabled={page.disabled}
                    role="button"
                  >
                    {page.label}
                  </Button>
                </span>
              </Tooltip>
            ))}
          </Box>
        </Box>
      </AppBar>
    </header>
  );
}

export default Header;
