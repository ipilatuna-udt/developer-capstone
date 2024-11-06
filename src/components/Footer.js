import { useTheme, Box } from "@mui/material";

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
      }}
    >
      <p>© 2024</p>
    </Box>
  );
}

export default Footer;
