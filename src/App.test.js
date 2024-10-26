import { render, screen } from "@testing-library/react";
import App from "./App";

it("renders editor", () => {
  render(<App />);
  const subHeaingText = screen.getByRole("heading", {
    name: /editor/i,
  });
  expect(subHeaingText).toBeInTheDocument();
});
