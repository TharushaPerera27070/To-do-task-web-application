import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import TaskCard from "../ui/TaskCard.jsx";

describe("TaskCard Component", () => {
  const mockTask = {
    id: 100,
    title: "Buy Milk",
    description: "Go to the store",
  };

  it("displays the task title and description", () => {
    render(<TaskCard task={mockTask} onDone={() => {}} />);

    expect(screen.getByText("Buy Milk")).toBeInTheDocument();
    expect(screen.getByText("Go to the store")).toBeInTheDocument();
  });

  it("calls the onDone function when clicked", () => {
    const handleClick = vi.fn();

    render(<TaskCard task={mockTask} onDone={handleClick} />);
    const button = screen.getByRole("button", { name: /done/i });
    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalledWith(100);
  });
});
