import React from "react";
import { Checkbox, List, Tag } from "antd";

const TodoList = ({ todos, toggleTodo, removeTodo }) => {
  return (
    <List
      bordered
      dataSource={todos}
      renderItem={(todo) => (
        <List.Item className="r">
          <Checkbox
            onChange={() => toggleTodo(todo.id)}
            name={`todo-${todo.id}`}
          >
            <Tag color={todo.completed ? "success" : "error"}>{todo.text}</Tag>
          </Checkbox>
        </List.Item>
      )}
    />
  );
};

export default TodoList;
