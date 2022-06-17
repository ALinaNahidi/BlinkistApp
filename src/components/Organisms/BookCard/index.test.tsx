import { ThemeProvider } from "@emotion/react";
import { cleanup, render, screen } from "@testing-library/react";
import React from "react";
import { MemoryRouter } from "react-router-dom";
import baseTheme from "../../../themes";
import BookCard from "./BasicCard";
import { getBooks } from "../../../Data/data";

afterEach(cleanup);

const book = getBooks()[0];


it("renders Book Card author Organism", () => {
  render(
    <ThemeProvider theme={baseTheme}>
      <BookCard
        book={book}
        bookObject={getBooks()}
        onFinishedClick={handleFinish}
      />
    </ThemeProvider>,
    {
      wrapper: MemoryRouter,
    }
  );
  const Librarybutton = screen.getByText(
    book.author
  );

  expect(Librarybutton).toBeTruthy();
  expect(Librarybutton).toHaveClass("MuiTypography-subtitle2");
  expect(Librarybutton).toBeInTheDocument();
  expect(Librarybutton).toBeDefined();
});

it("renders Book Card title Organism", () => {
  render(
    <ThemeProvider theme={baseTheme}>
      <BookCard
        book={book}
        bookObject={getBooks()}
        onFinishedClick={handleFinish}
      />
    </ThemeProvider>,
    {
      wrapper: MemoryRouter,
    }
  );
  const Librarybutton = screen.getByText(book.title);

  expect(Librarybutton).toBeTruthy();
  expect(Librarybutton).toHaveClass("MuiTypography-subtitle2");
  expect(Librarybutton).toBeInTheDocument();
  expect(Librarybutton).toBeDefined();
});


it("renders Book Card Finished button Organism", () => {
  render(
    <ThemeProvider theme={baseTheme}>
      <BookCard
        book={book}
        bookObject={getBooks()}
        onFinishedClick={handleFinish}
        typeOfCard="reading"
      />
    </ThemeProvider>,
    {
      wrapper: MemoryRouter,
    }
  );
  const Librarybutton = screen.getByText("Finished");

  expect(Librarybutton).toBeTruthy();
  expect(Librarybutton).toHaveClass("MuiTypography-body1");
  expect(Librarybutton).toBeInTheDocument();
  expect(Librarybutton).toBeDefined();
});


it("renders Book Card Read again button Organism", () => {
  render(
    <ThemeProvider theme={baseTheme}>
      <BookCard
        book={book}
        bookObject={getBooks()}
        onFinishedClick={handleFinish}
        typeOfCard="finished"
      />
    </ThemeProvider>,
    {
      wrapper: MemoryRouter,
    }
  );
  const Librarybutton = screen.getByText("Read again");

  expect(Librarybutton).toBeTruthy();
  expect(Librarybutton).toHaveClass("MuiTypography-body1");
  expect(Librarybutton).toBeInTheDocument();
  expect(Librarybutton).toBeDefined();
});

it("renders Book Card Add to Library button Organism", () => {
  render(
    <ThemeProvider theme={baseTheme}>
      <BookCard
        book={book}
        bookObject={getBooks()}
        onFinishedClick={handleFinish}
        typeOfCard="myLibrary"
      />
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

const handleFinish = (arg: any) => {};
