import { render, screen } from "@testing-library/react";
import Header from "../Header";

describe("Header component", () => {
  it("Should render passed text", () => {
    render(<Header title="My Header" />);
    const headerText = screen.getByText(/my header/i);
    expect(headerText).toBeInTheDocument();
  });
});

// Below one will fail if we have more than one role i.e., headings

// it("Should render and get the role", () => {
//     render(<Header title="My Header" />);
//     const headerRole = screen.getByRole('heading');
//     expect(headerRole).toBeInTheDocument();
//   });

// it("Should render and get the role", () => {
//   render(<Header title="My Header" />);
//   const headerRole = screen.getByRole("heading", { name: "My Header" });
//   expect(headerRole).toBeInTheDocument();
// });

// // Get element using semantic
// it("Should render and get by semantic properties", () => {
//   render(<Header title="My Header" />);
//   const headerTitle = screen.getByTitle("Header");
//   expect(headerTitle).toBeInTheDocument();
// });

// // Get by test id
// it("Get by test id", () => {
//   render(<Header title="My Header" />);
//   const headerTestId = screen.getByTestId("heading-1");
//   expect(headerTestId).toBeInTheDocument();
// });

// // FindBy
// it("Find By text", async () => {
//   render(<Header title="My Header" />);
//   const headerText = await screen.findByText(/my header/i);
//   expect(headerText).toBeInTheDocument();
// });

// // QueryBy will return null in case if it doesn't find element
// it("Query by", async () => {
//     render(<Header title="My Header" />);
//     const headerText = screen.queryByText(/dogs/i);
//     expect(headerText).not.toBeInTheDocument();
//   });

//   // GetAll
//   it("Get all by", async () => {
//     render(<Header title="My Header" />);
//     const headerElements = screen.getAllByRole('heading');
//     // expect(headerElements.length).toBe(2);
//     expect(headerElements).toHaveLength(2);
//   });
