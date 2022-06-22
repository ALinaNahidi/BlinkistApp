import { ThemeProvider } from "@emotion/react";
import { cleanup, fireEvent, render, screen, waitFor, within } from "@testing-library/react";
import React from "react";
import { MemoryRouter } from "react-router-dom";
import baseTheme from "../../../themes";
import { getBooks } from "../../../Data/data";
import ExploreDropDown from ".";

afterEach(cleanup);


const handleExplore = (arg: any) => {console.log("any msg");};


it("renders Explore drop down Organism", () => {
  render(
    <ThemeProvider theme={baseTheme}>
      <ExploreDropDown bookObject={getBooks()} onExplore={handleExplore} />
    </ThemeProvider>,
    {
      wrapper: MemoryRouter,
    }
  );
  const Librarybutton = screen.getByText("Explore");

  expect(Librarybutton).toBeTruthy();
  expect(Librarybutton).toHaveClass("MuiTypography-body1");
  expect(Librarybutton).toBeInTheDocument();
  expect(Librarybutton).toBeDefined();
});

it("renders Explore drop down OnClick Organism", async() => {
  render(
    <ThemeProvider theme={baseTheme}>
      <ExploreDropDown bookObject={getBooks()} onExplore={handleExplore} />
    </ThemeProvider>,
    {
      wrapper: MemoryRouter,
    }
  );
  const Explorebutton = within(screen.getByTestId("popup-state")).getByText("Explore");
  fireEvent.click(Explorebutton)

   const popup = await screen.findByTestId("popup-state-onclick");

  expect(popup).toBeInTheDocument();
  expect(Explorebutton).toBeTruthy();
  expect(Explorebutton).toHaveClass("MuiTypography-body1");
  expect(Explorebutton).toBeInTheDocument();
  expect(Explorebutton).toBeDefined();
});
