import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import FollowersList from "../FollowersList";

const MockFollowersList = () => {
  return (
    <BrowserRouter>
      <FollowersList />
    </BrowserRouter>
  );
};

describe("FollowersList", () => {
  it("Should have at least one followers", async () => {
    render(<MockFollowersList />);
    const divFollowerElements = await screen.findAllByTestId("follower-item");
    expect(divFollowerElements[1]).toBeInTheDocument();
    expect(divFollowerElements).toHaveLength(5);
  });
});
