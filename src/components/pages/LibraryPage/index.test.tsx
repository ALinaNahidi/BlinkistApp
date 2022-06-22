import { ThemeProvider } from "@emotion/react";
import { cleanup, render, screen } from "@testing-library/react";
import React from "react";
import { MemoryRouter } from "react-router-dom";
import baseTheme from "../../../themes";
import MyLibraryPage from ".";

afterEach(cleanup);

const handleFinish = (arg: any) => {console.log("any msg");};

it("renders MyLibrary Page", async () => {
  jest.useFakeTimers();
  render(
    <ThemeProvider theme={baseTheme}>
      <MyLibraryPage />
    </ThemeProvider>,
    {
      wrapper: MemoryRouter,
    }
  );
  await Promise.resolve();
  const MyLibrary = screen.getAllByText("Finished");
 expect(MyLibrary[0]).toBeDefined();
});


it("renders MyLibrary Page2", async () => {
  jest.useFakeTimers();
  render(
    <ThemeProvider theme={baseTheme}>
      <MyLibraryPage />
    </ThemeProvider>,
    {
      wrapper: MemoryRouter,
    }
  );
  await Promise.resolve();
  const MyLibrary = screen.getAllByText("My Library");
  expect(MyLibrary[0]).toBeTruthy();
  expect(MyLibrary[0]).toBeInTheDocument();
  expect(MyLibrary[0]).toBeDefined();
});
