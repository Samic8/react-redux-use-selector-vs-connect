import React from "react";
import { render, screen } from "../../test-util";
import { CounterUseSelector } from "./CounterUseSelector";

// Testing component that is connected to redux
describe("CounterConnect", () => {
  it("shows the current count", () => {
    render(<CounterUseSelector />, {
      initialState: { counter: { value: 20 } },
    });
    expect(screen.getByText("20")).toBeInTheDocument();
  });
});
