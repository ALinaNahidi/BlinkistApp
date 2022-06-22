import { ThemeProvider } from "@emotion/react";
import { cleanup, render, screen } from "@testing-library/react";
import React from "react";
import { MemoryRouter } from "react-router-dom";
import baseTheme from "../../../themes";
import { getBooks } from "../../../Data/data";
import EnterpeneushipPage from ".";

afterEach(cleanup);

console.log("any msg");

it("renders Entrepeneuship page", () => {
  render(
    <ThemeProvider theme={baseTheme}>
      <MemoryRouter
        initialEntries={[{ pathname: "/entrepeneuship", state: getBooks() }]}
      >
        <EnterpeneushipPage />
      </MemoryRouter>
    </ThemeProvider>
  );

  const tabState = screen.getAllByText("My Library");

  expect(tabState[0]).toBeTruthy();
  expect(tabState[0]).toHaveClass("MuiTypography-body1");
  expect(tabState[0]).toBeInTheDocument();
  expect(tabState[0]).toBeDefined();
});
