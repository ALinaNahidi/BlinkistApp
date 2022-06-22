import { ThemeProvider } from "@emotion/react";
import { cleanup, render, screen } from "@testing-library/react";
import React from "react";
import { MemoryRouter } from "react-router-dom";
import baseTheme from "../../../themes";
import MyLibraryPage from ".";
import { getBooks } from "../../../Data/data";

afterEach(cleanup);

const handleFinish = (arg: any) => {
  console.log("any msg");
};

it("renders MyLibrary Page", async () => {
    const state = { book: getBooks()[0], bookObject: getBooks(), tab: "2" };

  jest.useFakeTimers();
  render(
    <ThemeProvider theme={baseTheme}>
      <MemoryRouter initialEntries={[{ pathname: "/", state: { ...state } }]}>
        <MyLibraryPage />
      </MemoryRouter>
    </ThemeProvider>
  );
  await Promise.resolve();
  const MyLibrary = screen.getAllByText("Finished");
  expect(MyLibrary[0]).toBeDefined();
});

it("renders MyLibrary Page2", async () => {
  const state = { book: getBooks()[0], bookObject: getBooks(), tab: "2" };

  jest.useFakeTimers();
  render(
    <ThemeProvider theme={baseTheme}>
      <MemoryRouter initialEntries={[{ pathname: "/", state: { ...state } }]}>
        <MyLibraryPage />
      </MemoryRouter>
    </ThemeProvider>
  );
  await Promise.resolve();
  const MyLibrary = screen.getAllByText("My Library");
  expect(MyLibrary[0]).toBeTruthy();
  expect(MyLibrary[0]).toBeInTheDocument();
  expect(MyLibrary[0]).toBeDefined();
});
