import { render, screen } from "@testing-library/react";
import { vi } from "vitest";
import userEvent from "@testing-library/user-event";
import App from "../App";

Math.random = vi.fn(() => 0.5);
vi.mock("../constants", () => ({
  BREAKPOINTS: { mobile: 320 },
  DEFAULT_GAME_CONFIG: { size: 3 },
}));

describe("Board", () => {
  it("should flip all the cards correctly", async () => {
    render(<App />);

    const cards = screen.getAllByTestId("card");

    await userEvent.click(cards[0]);
    await userEvent.click(cards[3]);
    await userEvent.click(cards[1]);
    await userEvent.click(cards[4]);
    await userEvent.click(cards[2]);
    await userEvent.click(cards[5]);

    const hasBackCards = screen.queryByRole("img", { name: "back" });
    expect(hasBackCards).toBeNull();

    const victoryMessage = await screen.findByText("Victory");
    expect(victoryMessage).toBeInTheDocument();
  });

  it("should unflip the previous 2 cards if it is no equal", async () => {
    render(<App />);

    const cards = screen.getAllByTestId("card");

    await userEvent.click(cards[0]);
    await userEvent.click(cards[1]);
    await userEvent.click(cards[2]);

    const leftCards = screen.getAllByRole("img", { name: "back" });
    expect(leftCards).toHaveLength(5);
  });

  it("should not unflip if the same card is clicked", async () => {
    render(<App />);

    const cards = screen.getAllByTestId("card");

    await userEvent.click(cards[2]);
    await userEvent.click(cards[2]);

    const leftCards = screen.getAllByRole("img", { name: "back" });
    expect(leftCards).toHaveLength(5);
  });
});
