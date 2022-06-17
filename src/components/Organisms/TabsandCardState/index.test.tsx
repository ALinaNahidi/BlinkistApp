import { ThemeProvider } from "@emotion/react";
import { cleanup, render, screen } from "@testing-library/react";
import React from "react";
import { MemoryRouter } from "react-router-dom";
import baseTheme from "../../../themes";
import { getBooks } from "../../../Data/data";
import TabsandCardState from "./TabsansCarsState";

afterEach(cleanup);

const handleFinish = (arg: any) => {};

it("renders Reading Card State Organism", () => {
  render(
    <ThemeProvider theme={baseTheme}>
      <TabsandCardState
        books={getBooks()}
        onFinishedClick={handleFinish}
        type="reading"
      />
    </ThemeProvider>,
    {
      wrapper: MemoryRouter,
    }
  );
  const tabState = screen.getAllByText("Finished");

  expect(tabState[0]).toBeTruthy();
  expect(tabState[0]).toHaveClass("MuiTypography-body1");
  expect(tabState[0]).toBeInTheDocument();
  expect(tabState[0]).toBeDefined();
});
