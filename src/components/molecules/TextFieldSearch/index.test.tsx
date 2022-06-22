import { ThemeProvider } from "@emotion/react";
import { cleanup, render, screen, within } from "@testing-library/react";
import React from "react";
import { MemoryRouter } from "react-router-dom";
import baseTheme from "../../../themes";
import TextFieldSearch from "./index";


afterEach(cleanup);
console.log("any msg");
it("renders Text Field Search molecule", () => {
  render(
    <ThemeProvider theme={baseTheme}>
      <TextFieldSearch />
    </ThemeProvider>,
    {
      wrapper: MemoryRouter,
    }
  );
  const Librarybutton = screen.getByPlaceholderText(
    "Search by title or author"
  );

  expect(Librarybutton).toBeTruthy();
  expect(Librarybutton).toHaveClass("MuiInputBase-inputAdornedStart");
  expect(Librarybutton).toBeInTheDocument();
  expect(Librarybutton).toBeDefined();
});
