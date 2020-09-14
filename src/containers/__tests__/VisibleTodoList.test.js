import React from "react";
import { render } from "../../utils/test-utils";
import VisibleTodoList from "../VisibleTodoList";

describe("<VisibleTodoList>", () => {
  const todos = [
    { id: 0, text: "Start timer", completed: false },
    { id: 1, text: "Write the unit tests", completed: true },
    { id: 2, text: "Write the code", completed: false },
    { id: 3, text: "Refactor", completed: false }
  ];
  const visibilityFilter = "SHOW_COMPLETED";
  const initialState = {
    todos,
    visibilityFilter
  };

  it("renders a list of todo items", () => {
    const { getByText, getAllByRole } = render(<VisibleTodoList />, {
      initialState
    });
    expect(getByText("Write the unit tests")).toBeInTheDocument();
    expect(getAllByRole("listitem").length).toEqual(1);
  });
});
