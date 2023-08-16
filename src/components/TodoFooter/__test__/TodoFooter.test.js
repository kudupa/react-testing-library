import { screen, render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import TodoFooter from "../TodoFooter";

// When we just render TodoFooter it will throw an error because it uses Link from react router dom
// The Link should be used inside BrowserRouter

const MockTodoRouter = ({ numberOfIncompleteTasks }) => (
  <BrowserRouter>
    <TodoFooter numberOfIncompleteTasks={numberOfIncompleteTasks} />
  </BrowserRouter>
);

describe("TodoFooter component", () => {
  it("Should render correct amount of incomplete tasks", () => {
    render(<MockTodoRouter numberOfIncompleteTasks={4} />);
    const paraText = screen.getByText(/4 tasks left/i);
    expect(paraText).toBeInTheDocument();
  });

  // assert only one task
  it("Should render 'task' when number of incomplete tasks is one", () => {
    render(<MockTodoRouter numberOfIncompleteTasks={1} />);
    const paraText = screen.getByText(/1 task left/i);
    expect(paraText).toBeInTheDocument();
  });
});

// it("To be truthy", () => {
//   render(<MockTodoRouter numberOfIncompleteTasks={1} />);
//   const paraText = screen.getByText(/1 task left/i);
//   expect(paraText).toBeTruthy();
// });

// it("To be visible", () => {
//   render(<MockTodoRouter numberOfIncompleteTasks={1} />);
//   const paraText = screen.getByText(/1 task left/i);
//   expect(paraText).toBeVisible();
// });

// it("Contain Html", () => {
//   render(<MockTodoRouter numberOfIncompleteTasks={1} />);
//   const paraText = screen.getByText(/1 task left/i);
//   expect(paraText).toContainHTML("p");
// });

// it("To have text content", () => {
//   render(<MockTodoRouter numberOfIncompleteTasks={1} />);
//   const paraText = screen.getByTestId("para");
//   expect(paraText).toHaveTextContent("1 task left");
// });

// it("To be", () => {
//     render(<MockTodoRouter numberOfIncompleteTasks={1} />);
//     const paraText = screen.getByTestId("para");
//     expect(paraText.textContent).toBe('1 task left')
//   });
