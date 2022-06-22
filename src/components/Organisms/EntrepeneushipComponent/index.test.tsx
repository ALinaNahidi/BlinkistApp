import { ThemeProvider } from "@emotion/react";
import { cleanup, render, screen } from "@testing-library/react";
import React from "react";
import { MemoryRouter } from "react-router-dom";
import baseTheme from "../../../themes";
import { getBooks } from "../../../Data/data";
import EntrepeneushipPageComponent from ".";

afterEach(cleanup);
const book = getBooks()[0];

it("renders Book Card author Organism", () => {
  render(
    <ThemeProvider theme={baseTheme}>
      <EntrepeneushipPageComponent
        bookObject={getBooks()}
      />
    </ThemeProvider>,
    {
      wrapper: MemoryRouter,
    }
  );
  const Librarybutton = screen.getAllByText(book.author);

  expect(Librarybutton[0]).toBeTruthy();
  expect(Librarybutton[0]).toHaveClass("MuiTypography-subtitle2");
  expect(Librarybutton[0]).toBeInTheDocument();
  expect(Librarybutton[0]).toBeDefined();
});
