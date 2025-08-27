import { render, screen, fireEvent } from "@testing-library/react";
import PromptStyleForm from "../PromptStyleForm";
import { vi } from "vitest";

describe("PromptStyleForm", () => {
  it("renders prompt input and style select", () => {
    render(
      <PromptStyleForm
        prompt=""
        style="Editorial"
        onPromptChange={() => {}}
        onStyleChange={() => {}}
      />
    );

    expect(screen.getByLabelText(/Prompt/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Style/i)).toBeInTheDocument();
  });

  it("calls onPromptChange when typing", () => {
    const mockOnPromptChange = vi.fn();
    render(
      <PromptStyleForm
        prompt=""
        style="Editorial"
        onPromptChange={mockOnPromptChange}
        onStyleChange={() => {}}
      />
    );

    fireEvent.change(screen.getByLabelText(/Prompt/i), {
      target: { value: "A test prompt" },
    });

    expect(mockOnPromptChange).toHaveBeenCalledWith("A test prompt");
  });
});
