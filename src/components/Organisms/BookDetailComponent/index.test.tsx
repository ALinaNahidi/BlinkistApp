import { ThemeProvider } from "@emotion/react";
import { cleanup, render, screen } from "@testing-library/react";
import React from "react";
import { MemoryRouter } from "react-router-dom";
import baseTheme from "../../../themes";
import { getBooks } from "../../../Data/data";
import BookDetailComponent from ".";

afterEach(cleanup);

const book = getBooks()[0];
it("renders Book Card author Organism", () => {
  render(
    <ThemeProvider theme={baseTheme}>
      <BookDetailComponent
        book={book}
        bookObject={getBooks()}

      />
    </ThemeProvider>,
    {
      wrapper: MemoryRouter,
    }
  );
  const Librarybutton = screen.getByText(book.author);

  expect(Librarybutton).toBeTruthy();
  expect(Librarybutton).toHaveClass("MuiTypography-subtitle2");
  expect(Librarybutton).toBeInTheDocument();
  expect(Librarybutton).toBeDefined();
});

