import React from "react";
import { render, screen } from "../../test-util";
import { CounterConnectInner } from "./CounterConnect";

describe("CounterConnect", () => {
  it("shows the current count", () => {
    render(<CounterConnectInner count={20} />);
    expect(screen.queryByText("20")).toBeInTheDocument();
  });
});
