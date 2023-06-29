import { render, screen } from "@testing-library/react";
import App from "../App";

describe("App", () => {
  it("renders without crashing", () => {
    render(<App />);

    screen.getByRole("heading", { name: "Memory Game" });
  });
});
