import React from "react";
import { render, fireEvent, waitFor } from "../../../utils/test-utils";
import TodoForm from "../TodoForm";

describe("<TodoForm>", () => {
  const addTodo = jest.fn();

  it("creates a todo item", async () => {
    const { getByText, getByPlaceholderText } = render(
      <TodoForm addTodo={addTodo} />
    );
    const input = getByPlaceholderText("What needs to be done?");
    fireEvent.change(input, { target: { value: "Write unit tests" } });
    fireEvent.submit(getByText("Add Todo"));
    await waitFor(() => expect(addTodo).toHaveBeenCalled());
  });
});
