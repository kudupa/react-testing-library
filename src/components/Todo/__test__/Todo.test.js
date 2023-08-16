import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Todo from "../Todo";

const MockTodo = () => (
  <BrowserRouter>
    <Todo />
  </BrowserRouter>
);

describe("Test component", () => {
  it("should render same text passed to input element", () => {
    render(<MockTodo />);
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    fireEvent.change(inputElement, { target: { value: "Buy Icecream" } });
    fireEvent.submit(inputElement);
    const divElement = screen.getByText(/Buy Icecream/i);
    expect(divElement).toBeInTheDocument();
  });

  it("should render and get all the tasks we pass to input", () => {
    render(<MockTodo />);
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    const tasks = ["Buy Icecream", "Go for grocery shopping", "play game"];
    tasks.forEach((task) => {
      fireEvent.change(inputElement, { target: { value: task } });
      fireEvent.submit(inputElement);
    });
    const divElements = screen.getAllByTestId(/todo-item/i);
    expect(divElements).toHaveLength(3);
  });

  it("Should not have todo item complete class when it first renders", () => {
    render(<MockTodo />);
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    const tasks = ["Buy Icecream"];
    tasks.forEach((task) => {
      fireEvent.change(inputElement, { target: { value: task } });
      fireEvent.submit(inputElement);
    });
    const divElement = screen.getByTestId(/todo-item/i);
    expect(divElement).not.toHaveClass("todo-item-complete");
    fireEvent.click(divElement);
    expect(divElement).toHaveClass("todo-item-complete");
  });
});
