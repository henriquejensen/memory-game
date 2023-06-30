import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";
import App from "../App";

vi.spyOn(window, "scrollTo").mockImplementation(vi.fn);

describe("App", () => {
  it("renders without crashing", () => {
    render(<App />);

    screen.getByRole("heading", { name: "Memory Game" });
  });

  it("Should show 12 back cards when the game starts", () => {
    render(<App />);

    const backCards = screen.getAllByRole("img", { name: "back" });

    expect(backCards.length).toBe(12);
  });

  it("Should flip the card when the user click on it", async () => {
    render(<App />);

    const firstCard = screen.getAllByRole("img", { name: "back" })[0];
    expect(firstCard).toHaveAttribute("src", "/src/assets/Back.svg");

    await userEvent.click(firstCard);

    expect(firstCard).not.toHaveAttribute("src", "/src/assets/Back.svg");

    const backCards = screen.getAllByRole("img", { name: "back" });

    expect(backCards.length).toBe(11);
  });

  it("Should restart the game when button restart is pressed", async () => {
    render(<App />);

    const firstCard = screen.getAllByRole("img", { name: "back" })[0];
    await userEvent.click(firstCard);

    const backCards = screen.getAllByRole("img", { name: "back" });
    expect(backCards.length).toBe(11);

    const restartButton = screen.getByRole("button", { name: "Restart" });
    await userEvent.click(restartButton);

    const backCardsAfterRestart = screen.getAllByRole("img", { name: "back" });
    expect(backCardsAfterRestart.length).toBe(12);
  });

  it("Should change the number of cards if click on New Game button", async () => {
    render(<App />);

    const newGameBtn = screen.getByRole("button", { name: "New Game" });
    await userEvent.click(newGameBtn);

    const input = screen.getByRole<HTMLInputElement>("slider");
    input.value = "3";

    const startBtn = screen.getByRole("button", {
      name: "Start",
    });
    await userEvent.click(startBtn);

    const backCards = screen.getAllByRole("img", { name: "back" });

    expect(backCards.length).toBe(6);
  });
});
