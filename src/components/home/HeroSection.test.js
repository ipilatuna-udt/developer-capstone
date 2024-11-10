import React from "react";
import { render, screen } from "@testing-library/react";
import HeroSection from "./HeroSection";
import { ThemeProvider, createTheme } from "@mui/material";

describe("HeroSection Component", () => {
  const theme = createTheme();

  function renderWithTheme(component) {
    return render(<ThemeProvider theme={theme}>{component}</ThemeProvider>);
  }

  test("renders title, subtitle, description, and button", () => {
    renderWithTheme(<HeroSection />);

    const title = screen.getByText("Little Lemon Restaurant");
    expect(title).toBeInTheDocument();

    const subtitle = screen.getByText("Chicago");
    expect(subtitle).toBeInTheDocument();

    const bodyText = screen.getByText(
      /Lorem ipsum dolor sit amet, consectetur adipiscing elit\./
    );
    expect(bodyText).toBeInTheDocument();

    const button = screen.getByRole("button", { name: /Book a Table/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute("href", "/bookings");
  });

  test("renders image with correct attributes", () => {
    renderWithTheme(<HeroSection />);

    const image = screen.getByAltText("restaurant");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", "/assets/home/little-lemon-restaurant.jpg");
    expect(image).toHaveClass("hero-image");
  });

});
