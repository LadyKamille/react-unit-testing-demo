import React from "react";
import { render, fireEvent } from "../../../utils/test-utils";
import TodoList from "../TodoList";

describe("<TodoList>", () => {
  const todos = [
    { id: 0, text: "Start the timer", completed: false },
    { id: 0, text: "Write the tests", completed: true },
    { id: 0, text: "Run the tests", completed: true },
    { id: 0, text: "Write the code", completed: false }
  ];
  const toggleTodo = jest.fn();
  const removeTodo = jest.fn();

  it("shows a list of todo items", async () => {
    const { container, getAllByRole } = render(<TodoList todos={todos} />);
    expect(container).toHaveTextContent("Write the code");
    expect(getAllByRole("listitem").length).toEqual(4);
  });

  it("toggles a todo item", () => {
    const { getByRole } = render(
      <TodoList todos={todos} toggleTodo={toggleTodo} />
    );
    fireEvent.click(getByRole("checkbox", { name: "Start the timer" }));
    expect(toggleTodo).toHaveBeenCalledWith(0);
  });

  it("removes a todo item", () => {
    const { getAllByTitle } = render(
      <TodoList todos={todos} removeTodo={removeTodo} />
    );
    fireEvent.click(getAllByTitle("Remove")[0]);
    expect(removeTodo).toHaveBeenCalledWith(0);
  });
});
