import { cleanup, render, screen, within } from "@testing-library/react";
import React from "react";
import { MemoryRouter } from "react-router-dom";
import TextHeader from "./index";


afterEach(cleanup);

it("renders Header h3", () => {
  render(<TextHeader children="Header" varient="h3"/>, {
    wrapper: MemoryRouter,
  });
  const button = screen.getByText("Header");

  expect(button).toBeTruthy();
  expect(button).toHaveClass("MuiTypography-h3");
});

it("renders Header h5", () => {
  render(<TextHeader children="Header" varient="h5" />, {
    wrapper: MemoryRouter,
  });
  const button = screen.getByText("Header");

  expect(button).toBeTruthy();
  expect(button).toHaveClass("MuiTypography-h5");
});
