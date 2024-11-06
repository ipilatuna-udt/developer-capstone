import { Routes, Route } from "react-router-dom";
import { pages } from "./routing";
import { Box } from "@mui/material";
import "./Main.css";

function Main() {
  return (
    <Box className="main-container">
      <Routes>
        {pages.map((page) => (
          <Route
            key={page.href}
            path={page.href}
            element={<page.component />}
          />
        ))}
      </Routes>
    </Box>
  );
}

export default Main;
