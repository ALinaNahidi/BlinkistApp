import { ThemeProvider } from "@emotion/react";
import { cleanup, render, screen } from "@testing-library/react";
import React from "react";
import { MemoryRouter } from "react-router-dom";
import baseTheme from "../../../themes";
import MyLibraryTemplate from ".";

afterEach(cleanup);
const DummyView = () => <div>dummy view</div>;
it("renders Entrepeneuship Template", () => {
  render(
    <ThemeProvider theme={baseTheme}>
      <MemoryRouter>
        <MyLibraryTemplate
          blinkistTabs={<DummyView />}
          header={<DummyView />}
        />
      </MemoryRouter>
    </ThemeProvider>
  );

  const tabState = screen.getAllByText("dummy view");

  expect(tabState[0]).toBeTruthy();
  expect(tabState[0]).toBeInTheDocument();
  expect(tabState[0]).toBeDefined();
});
