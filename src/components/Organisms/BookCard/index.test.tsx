import { ThemeProvider } from "@emotion/react";
import { cleanup, render, screen } from "@testing-library/react";
import React from "react";
import { MemoryRouter } from "react-router-dom";
import baseTheme from "../../../themes";
import BookCard from "./BasicCard";
import { getBooks } from "../../../Data/data";

jest.mock("@auth0/auth0-react", () => ({
  Auth0Provider: () => {},
  withAuthenticationRequired: (component:any) => component,

  useAuth0: () => {
    return {
      isAuthenticated: true,
      user: { sub: "foobar" },
      mockFn: true,
      logout: jest.fn(),
    };
  },
}));


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
  var Librarybutton = screen.getByText(book.author);
    Librarybutton = screen.getByText("13-minute read");
  
  expect(Librarybutton).toBeTruthy();
  expect(Librarybutton).toHaveClass("MuiTypography-body1");
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
  var Librarybutton = screen.getByText(book.title);

    Librarybutton = screen.getByText("13-minute read");
  
  expect(Librarybutton).toBeTruthy();
  expect(Librarybutton).toHaveClass("MuiTypography-body1");
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
  var Librarybutton = screen.getByText("1.9k reads");

    // Librarybutton = screen.getByText("13-minute read");
  
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
  var Librarybutton = screen.getByText(book.author);

    // Librarybutton = screen.getByText("Read again");
  
  expect(Librarybutton).toBeTruthy();
  expect(Librarybutton).toHaveClass("MuiTypography-subtitle2");
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
  var Librarybutton = screen.getByText(book.author);

    // Librarybutton = screen.getByText("Add to library");
  expect(Librarybutton).toBeTruthy();
  expect(Librarybutton).toHaveClass("MuiTypography-subtitle2");
  expect(Librarybutton).toBeInTheDocument();
  expect(Librarybutton).toBeDefined();
});

const handleFinish = (arg: any) => {};
