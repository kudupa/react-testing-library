import { fireEvent, render, screen } from "@testing-library/react";
import AddInput from "../AddInput";

const mockSetTodos = jest.fn();

describe("Add Input", () => {
  it("Should render placeholder text", () => {
    render(<AddInput setTodos={mockSetTodos} />);
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    expect(inputElement).toBeInTheDocument();
  });

  it("Should be able to type in input", () => {
    render(<AddInput setTodos={mockSetTodos} />);
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    fireEvent.change(inputElement, { target: { value: "Bring Icecream" } });
    expect(inputElement.value).toBe("Bring Icecream");
  });

  it("Should get the placeholder back after entering the input", () => {
    render(<AddInput setTodos={mockSetTodos} />);
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    fireEvent.change(inputElement, { target: { value: "Bring Icecream" } });
    fireEvent.submit(inputElement);
    expect(inputElement).toHaveAttribute(
      "placeholder",
      "Add a new task here..."
    );
  });
});
