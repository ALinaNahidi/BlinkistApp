import { ThemeProvider } from "@emotion/react";
import { cleanup, render, screen } from "@testing-library/react";
import React from "react";
import { MemoryRouter } from "react-router-dom";
import baseTheme from "../../../themes";
import NavBar from ".";
import { getBooks } from "../../../Data/data";


afterEach(cleanup);

it("renders NavBar Organism", () => {
  render(
    <ThemeProvider theme={baseTheme}>
      <NavBar bookObject={getBooks()} />
    </ThemeProvider>,
    {
      wrapper: MemoryRouter,
    }
  );
  const Librarybutton = screen.getByText("My Library");

  expect(Librarybutton).toBeTruthy();
  expect(Librarybutton).toHaveClass("MuiTypography-body1");
  expect(Librarybutton).toBeInTheDocument();
  expect(Librarybutton).toBeDefined();
});
