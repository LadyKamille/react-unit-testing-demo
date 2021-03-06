import todos, { addTodo, toggleTodo, removeTodo } from "../todosSlice";

describe("todos reducer", () => {
  it("should handle initial state", () => {
    expect(todos(undefined, {})).toEqual([]);
  });

  describe("should handle adding a todo item", () => {
    it("handles empty initial state", () => {
      expect(
        todos([], {
          type: addTodo.type,
          payload: {
            text: "Run the tests",
            id: 0
          }
        })
      ).toEqual([
        {
          text: "Run the tests",
          completed: false,
          id: 0
        }
      ]);
    });

    it("handles non empty initial state", () => {
      expect(
        todos(
          [
            {
              text: "Run the tests",
              completed: false,
              id: 0
            }
          ],
          {
            type: addTodo.type,
            payload: {
              text: "Use Redux",
              id: 1
            }
          }
        )
      ).toEqual([
        {
          text: "Run the tests",
          completed: false,
          id: 0
        },
        {
          text: "Use Redux",
          completed: false,
          id: 1
        }
      ]);
    });
  });

  it("should handle toggling a todo item", () => {
    expect(
      todos(
        [
          {
            text: "Run the tests",
            completed: false,
            id: 1
          },
          {
            text: "Use Redux",
            completed: false,
            id: 0
          }
        ],
        {
          type: toggleTodo.type,
          payload: 1
        }
      )
    ).toEqual([
      {
        text: "Run the tests",
        completed: true,
        id: 1
      },
      {
        text: "Use Redux",
        completed: false,
        id: 0
      }
    ]);
  });

  it("should handle removing a todo item", () => {
    expect(
      todos(
        [
          {
            text: "Run the tests",
            completed: false,
            id: 1
          },
          {
            text: "Use Redux",
            completed: false,
            id: 0
          }
        ],
        {
          type: removeTodo.type,
          payload: 1
        }
      )
    ).toEqual([
      {
        text: "Use Redux",
        completed: false,
        id: 0
      }
    ]);
  });
});
