// About.test.js
import React from "react";
import { render, screen } from "@testing-library/react";
import AboutSection from "./AboutSection";

describe("AboutSection", () => {
  test("renders section title and description", () => {
    render(<AboutSection />);

    const title = screen.getByRole("heading", { name: "About Us" });
    expect(title).toBeInTheDocument();
    expect(title).toHaveAttribute("id", "about-section-title");

    const descriptionText = screen.getByText(/Little Lemon Restaurant is a family-owned restaurant in Chicago. We serve the best food in town, and we are proud of our excellent service/);
    expect(descriptionText).toBeInTheDocument();
    expect(descriptionText).toHaveAttribute("id", "about-description");
  });

  test("renders the image with correct attributes", () => {
    render(<AboutSection />);

    const image = screen.getByAltText("Restaurant owner at Little Lemon");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", "/assets/home/little-lemon-owner.jpg");
    expect(image).toHaveAttribute("aria-describedby", "image-description");

    const imageDescription = screen.getByText("This image shows the owner of Little Lemon Restaurant.");
    expect(imageDescription).toBeInTheDocument();
    expect(imageDescription).toHaveAttribute("id", "image-description");
    expect(imageDescription).toHaveAttribute("aria-hidden", "true");
  });

  test("applies correct ARIA roles and labels for accessibility", () => {
    render(<AboutSection />);

    const mainSection = screen.getByRole("region", { name: "About Us" });
    expect(mainSection).toBeInTheDocument();
    expect(mainSection).toHaveAttribute("aria-labelledby", "about-section-title");

    const descriptionRegion = screen.getByRole("region", { name: /Little Lemon Restaurant is a family-owned restaurant in Chicago. We serve the best food in town, and we are proud of our excellent service/ });
    expect(descriptionRegion).toBeInTheDocument();
    expect(descriptionRegion).toHaveAttribute("aria-labelledby", "about-description");

    const complementarySection = screen.getByRole("complementary", { name: "Restaurant Owner Image" });
    expect(complementarySection).toBeInTheDocument();
    expect(complementarySection).toHaveAttribute("aria-label", "Restaurant Owner Image");
  });
});
