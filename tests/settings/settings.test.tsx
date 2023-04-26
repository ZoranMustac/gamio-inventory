import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Settings from "@component/pages/titles/settings";

test("renders settings title", () => {
  render(<Settings />);
  const title = screen.getByText("SETTINGS");
  expect(title).toBeInTheDocument;
});
