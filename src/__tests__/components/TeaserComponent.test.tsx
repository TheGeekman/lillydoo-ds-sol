import React from "react";
import { render, screen } from "@testing-library/react";
import TeaserComponent from "../../components/UI/TeaserComponent";

test("renders TeaserComponent", () => {
  render(<TeaserComponent />);
  const item = screen.getByText(/Noch nicht überzeugt?/i);
  expect(item).toBeInTheDocument();
});
