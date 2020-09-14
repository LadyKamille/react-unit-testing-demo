import React from "react";
import { render } from "../../utils/test-utils";
import AddTodo from "../AddTodo";

describe("<AddTodo>", () => {
  it("displays the add todo form", async () => {
    const { getByPlaceholderText } = render(<AddTodo />);
    expect(getByPlaceholderText("What needs to be done?")).toBeInTheDocument();
  });
});
