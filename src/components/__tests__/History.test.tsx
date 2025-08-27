import { render, screen, fireEvent } from "@testing-library/react";
import History from "../History";
import { vi } from "vitest";

test("restores history item on click", () => {
  const history = [
    {
      id: "1",
      imageUrl: "test.png",
      prompt: "Hello",
      style: "Vintage",
      createdAt: new Date().toISOString(),
    },
  ];
  const onSelect = vi.fn();

  render(<History history={history} onSelect={onSelect} />);

  fireEvent.click(screen.getByRole("button", { name: /Hello/i }));
  expect(onSelect).toHaveBeenCalledWith(history[0]);
});
