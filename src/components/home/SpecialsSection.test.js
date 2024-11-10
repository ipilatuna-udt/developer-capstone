import React from "react";
import { render, screen } from "@testing-library/react";
import SpecialsSection, { specials } from "./SpecialsSection";

describe("SpecialsSection Component", () => {
  test("renders section heading and description", () => {
    render(<SpecialsSection />);

    const heading = screen.getByText("Specials");
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveAttribute("id", "specials-heading");

    expect(screen.getByText("Check out our daily specials.")).toBeInTheDocument();
  });

  test("renders all special cards with correct ARIA labels", () => {
    render(<SpecialsSection />);

    specials.forEach((special) => {
      const titleElement = screen.getByText(special.title);
      expect(titleElement).toBeInTheDocument();
      expect(titleElement).toHaveAttribute("id", `${special.title}-title`);

      expect(screen.getByText(special.description)).toBeInTheDocument();

      const priceElement = screen.getByText(`$${special.price}`);
      expect(priceElement).toBeInTheDocument();
      expect(priceElement).toHaveAttribute("aria-label", `Price: $${special.price}`);
    });
  });

  test("sets ARIA roles and attributes for sections correctly", () => {
    render(<SpecialsSection />);

    const mainSection = screen.getByTestId("specials-section");
    expect(mainSection).toBeInTheDocument();
    expect(mainSection).toHaveAttribute("aria-labelledby", "specials-heading");

    specials.forEach((special) => {
      const region = screen.getByTestId(`special-card-${special.id}`);
      expect(region).toBeInTheDocument();
      expect(region).toHaveAttribute("aria-labelledby", `${special.title}-title`);
    });
  });
});
