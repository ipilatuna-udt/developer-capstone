import React from "react";
import { render, screen } from "@testing-library/react";
import Footer from "./Footer";
import { pages } from "../pages/routing";

describe("Footer Component", () => {
  test("renders footer with correct role and label", () => {
    render(<Footer />);

    const footer = screen.getByRole("contentinfo");
    expect(footer).toBeInTheDocument();
    expect(footer).toHaveAttribute("aria-labelledby", "footer-title");
  });

  test("renders logo with correct attributes", () => {
    render(<Footer />);
    const logoImage = screen.getByAltText("Little Lemon restaurant logo");
    expect(logoImage).toBeInTheDocument();
    expect(logoImage).toHaveAttribute("src", "/assets/little-lemon-icon.jpg");
    expect(logoImage).toHaveAttribute("height", "128");
  });

  test("renders navigation section with links", () => {
    render(<Footer />);

    const navigationHeading = screen.getByText("Navigation");
    expect(navigationHeading).toBeInTheDocument();
    expect(navigationHeading).toHaveAttribute("id", "footer-navigation");

    pages
      .filter((page) => !page.disabled)
      .forEach((page) => {
        const link = screen.getByRole("link", { name: `Navigate to ${page.label}` });
        expect(link).toBeInTheDocument();
        expect(link).toHaveAttribute("href", page.href);
      });
  });

  test("renders contact section with phone and email", () => {
    render(<Footer />);
    const contactHeading = screen.getByText("Contact");
    expect(contactHeading).toBeInTheDocument();
    expect(contactHeading).toHaveAttribute("id", "footer-contact");

    const phoneNumber = screen.getByText("123-456-7890");
    expect(phoneNumber).toBeInTheDocument();
    expect(phoneNumber).toHaveAttribute("aria-label", "Phone number");

    const emailLink = screen.getByRole("link", { name: "Email Little Lemon restaurant" });
    expect(emailLink).toBeInTheDocument();
    expect(emailLink).toHaveAttribute("href", "mailto:little-lemon@example.com");
  });

  test("displays copyright information", () => {
    render(<Footer />);

    const copyright = screen.getByText("© 2024");
    expect(copyright).toBeInTheDocument();
    expect(copyright).toHaveAttribute("aria-hidden", "true");
  });
});
