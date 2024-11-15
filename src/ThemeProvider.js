import { createTheme, ThemeProvider as MuiThemeProvider } from "@mui/material";
import { createContext } from "react";

const theme = createTheme({
  palette: {
    primary: {
      main: "#495E57",
    },
    secondary: {
      main: "#F4CE14",
    },
    action:{
      disabled: "darkgray",
    }
  },
});

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  return (
    <ThemeContext.Provider value={theme}>
      <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
    </ThemeContext.Provider>
  );
}
