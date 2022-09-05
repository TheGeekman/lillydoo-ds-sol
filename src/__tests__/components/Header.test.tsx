import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "../../components/UI/Header";

test("renders Header", () => {
  render(<Header />);
  const item = screen.getByText(/Hilfe/i);
  expect(item).toBeInTheDocument();
});
