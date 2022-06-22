import { ThemeProvider } from "@emotion/react";
import { cleanup, render, screen } from "@testing-library/react";
import React from "react";
import { MemoryRouter } from "react-router-dom";
import baseTheme from "../../../themes";
import { getBooks } from "../../../Data/data";
import BookDetailPage from ".";

afterEach(cleanup);
console.log("any msg");
it("renders BookDetail page", () => {
    const state = {book:getBooks()[0],bookObject:getBooks()}
  render(
    <ThemeProvider theme={baseTheme}>
      <MemoryRouter
        initialEntries={[{ pathname: "/BookDetailPage",state:{...state} }]}
      >
        <BookDetailPage />
      </MemoryRouter>
    </ThemeProvider>
  );

  const tabState = screen.getByText("Get the key ideas from");

  expect(tabState).toBeTruthy();
  expect(tabState).toHaveClass("MuiTypography-subtitle2");
  expect(tabState).toBeInTheDocument();
  expect(tabState).toBeDefined();
});

          