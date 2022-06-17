import { ThemeProvider } from "@emotion/react";
import { cleanup, render, screen } from "@testing-library/react";
import React from "react";
import { MemoryRouter } from "react-router-dom";
import baseTheme from "../../../themes";
import BookDetailTemplate from ".";

afterEach(cleanup);
const DummyView = () => <div>dummy view</div>;
it("renders BookDetail Template", () => {
  render(
    <ThemeProvider theme={baseTheme}>
      <MemoryRouter>
        <BookDetailTemplate bookDetailComponent={<DummyView />} />
      </MemoryRouter>
    </ThemeProvider>
  );

  const tabState = screen.getByText("dummy view");

  expect(tabState).toBeTruthy();
  expect(tabState).toBeInTheDocument();
  expect(tabState).toBeDefined();
});
