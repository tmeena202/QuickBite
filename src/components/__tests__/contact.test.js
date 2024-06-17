import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Contact from "../Contact";

test("Should load contact us component", () => {
  render(<Contact />);

  const heading = screen.getByRole("heading");

  expect(heading).toBeInTheDocument();
});

// Test Case to check if there is a button on our page or not.
test("Should load button inside contact us component", () => {
  render(<Contact />);

  const button = screen.getByRole("button");

  expect(button).toBeInTheDocument();
});

test("Finding random text on page", () => {
  render(<Contact />);

  const random = screen.getByText("Contact Us Page");

  expect(random).toBeInTheDocument();
});
