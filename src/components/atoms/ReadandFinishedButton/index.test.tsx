import { cleanup, render, screen, within } from "@testing-library/react";
import React from "react";
import { MemoryRouter } from "react-router-dom";
import ReadandFinishedButton from "./index";


afterEach(cleanup);
console.log("any msg");
it("renders Reading button", () => {
  render(<ReadandFinishedButton children="Finished" />, {
    wrapper: MemoryRouter,
  });
  const button = screen.getByText("Finished")

  expect(button).toBeTruthy();
  expect(button).toHaveClass("MuiTypography-body1");
  expect(button).toBeInTheDocument();

});

