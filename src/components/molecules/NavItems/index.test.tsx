import { ThemeProvider } from "@emotion/react";
import { cleanup, render, screen, within } from "@testing-library/react";
import React from "react";
import { MemoryRouter } from "react-router-dom";
import baseTheme from "../../../themes";
import NavItems from "./index";


afterEach(cleanup);

it("renders Explore molecule", () => {
  render(
    <ThemeProvider theme={baseTheme}>
      <NavItems children="Explore" />
    </ThemeProvider>,
    {
      wrapper: MemoryRouter,
    }
  );
  const Librarybutton = screen.getByText("Explore");

  expect(Librarybutton).toBeTruthy();
  expect(Librarybutton).toHaveClass("MuiTypography-body1");
  expect(Librarybutton).toBeInTheDocument();
  expect(Librarybutton).toBeDefined();
});
