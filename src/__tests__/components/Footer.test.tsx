import React from "react";
import { render, screen } from "@testing-library/react";
import Footer from "../../components/UI/Footer";

test("renders Footer", () => {
  render(<Footer />);
  const linkElement = screen.getByText(/Zahlung & Versand/i);
  expect(linkElement).toBeInTheDocument();
});
