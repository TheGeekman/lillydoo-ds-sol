import React from "react";
import { render, screen } from "@testing-library/react";
import Button from "../../components/UI/Button";
import userEvent from "@testing-library/user-event";

test("renders Button", () => {
  render(<Button />);
  const btn = screen.getByTestId("btnId");
  expect(btn).toBeInTheDocument();
  userEvent.click(btn);
});
