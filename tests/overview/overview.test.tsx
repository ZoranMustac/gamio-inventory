import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Overview from "@component/pages/titles/overview";

test("renders overview title", () => {
  render(<Overview />);
  const title = screen.getByText("OVERVIEW");
  expect(title).toBeInTheDocument;
});
