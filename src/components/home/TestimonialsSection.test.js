import React from "react";
import { render, screen } from "@testing-library/react";
import TestimonialsSection, { testimonials } from "./TestimonialsSection";


describe("TestimonialsSection", () => {
  test("renders section heading and description", () => {
    render(<TestimonialsSection />);

    const heading = screen.getByText("Testimonials");
    expect(heading).toBeInTheDocument();

    const description = screen.getByText(
      "See what our customers are saying about us."
    );
    expect(description).toBeInTheDocument();
  });

  test("renders all testimonials with correct name, rating, and comment", () => {
    render(<TestimonialsSection />);

    testimonials.forEach((testimonial) => {
      expect(screen.getByText(testimonial.name)).toBeInTheDocument();
    });
  });
});
