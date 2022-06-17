import { ThemeProvider } from "@emotion/react";
import { cleanup, render, screen, within } from "@testing-library/react";
import React from "react";
import { MemoryRouter } from "react-router-dom";
import baseTheme from "../../../themes";
import AddToLibrary from "./index";


afterEach(cleanup);

it("renders Add to library molecule", () => {
  render(
    <ThemeProvider theme={baseTheme}>
      <AddToLibrary children="Add to library" />
    </ThemeProvider>,
    {
      wrapper: MemoryRouter,
    }
  );
  const Librarybutton = screen.getByText("Add to library");

  expect(Librarybutton).toBeTruthy();
  expect(Librarybutton).toHaveClass("MuiTypography-body1");
  expect(Librarybutton).toBeInTheDocument();
  expect(Librarybutton).toBeDefined();
});

