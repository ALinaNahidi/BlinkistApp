import { ThemeProvider } from "@emotion/react";
import { cleanup, render, screen } from "@testing-library/react";
import React from "react";
import { MemoryRouter } from "react-router-dom";
import baseTheme from "../../../themes";
import { getBooks } from "../../../Data/data";
import EntrepeneushipPageComponent from ".";
import CardStateTrending from "./cardState";

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


it("renders Book Card author Organism2", () => {
  render(
    <ThemeProvider theme={baseTheme}>
      <EntrepeneushipPageComponent bookObject={getBooks()} />
    </ThemeProvider>,
    {
      wrapper: MemoryRouter,
    }
  );
  const Librarybutton = screen.getAllByText(book.title);

  expect(Librarybutton[0]).toBeTruthy();
  expect(Librarybutton[0]).toHaveClass("MuiTypography-subtitle2");
  expect(Librarybutton[0]).toBeInTheDocument();
  expect(Librarybutton[0]).toBeDefined();
});

const handleFinish = () => {} 

it("renders Book Card author Organism3", () => {
  render(
    <ThemeProvider theme={baseTheme}>
      <CardStateTrending books={getBooks()} onFinishedClick={handleFinish} limit={3} type={["myLibrary"]} />
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

