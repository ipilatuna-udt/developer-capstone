/* eslint-disable jest/no-conditional-expect */
import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "./Header";
import { pages } from "../pages/routing";
import "@testing-library/jest-dom";

describe("Header Component", () => {
  beforeEach(() => {
    delete window.location;
    window.location = { pathname: "/" };
  });

  test("renders the logo with correct attributes", () => {
    render(<Header />);

    const logoButton = screen.getByRole("button", {
      name: /Little Lemon Restaurant homepage/i,
    });
    expect(logoButton).toBeInTheDocument();
    expect(logoButton).toHaveAttribute("href", "/");

    const logoImage = screen.getByAltText("Little Lemon Restaurant logo");
    expect(logoImage).toBeInTheDocument();
    expect(logoImage).toHaveAttribute("src", "/assets/little-lemon-header.jpg");
  });

  test("renders navigation buttons with correct labels", () => {
    render(<Header />);

    pages.forEach((page) => {
      const button = screen.getByRole("button", { name: page.label });
      expect(button).toBeInTheDocument();
      expect(button).toHaveAttribute("href", page.href);
    });
  });

  test("applies aria-current to the active page button", () => {
    window.location.pathname = "/active-path";
    render(<Header />);

    pages.forEach((page) => {
      const button = screen.getByRole("button", { name: page.label });
      if (window.location.pathname === page.href) {
        expect(button).toHaveAttribute("aria-current", "page");
      } else {
        expect(button).not.toHaveAttribute("aria-current");
      }
    });
  });

});
