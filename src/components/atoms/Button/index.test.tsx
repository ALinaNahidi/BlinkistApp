import { cleanup, render, screen, within } from "@testing-library/react";
import React from "react";
import { MemoryRouter } from "react-router-dom";
import ButtonComponent from "./index";


afterEach(cleanup);

it("renders contained button", () => {
  render(<ButtonComponent varient="contained" title="button" />, {
    wrapper: MemoryRouter,
  });
  const button = screen.getByText("button");
  expect(button).toBeTruthy();
  expect(button).toHaveClass("MuiButton-contained");
});

it("renders outlined button", () => {
  render(<ButtonComponent varient="outlined" title="button" />, {
    wrapper: MemoryRouter,
  });
  const button = screen.getByText("button");
  expect(button).toBeTruthy();
  expect(button).toHaveClass("MuiButton-outlinedPrimary");
});

