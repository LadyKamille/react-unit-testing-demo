import React from "react";
import { Checkbox, List } from "antd";
import styles from "./TodoList.module.css";

const TodoList = ({ todos, toggleTodo }) => {
  return (
    <List
      bordered
      dataSource={todos}
      renderItem={(todo) => (
        <List.Item
          className={todo.completed ? styles.completed : styles.active}
        >
          <Checkbox
            onChange={() => toggleTodo(todo.id)}
            name={`todo-${todo.id}`}
          >
            {todo.text}
          </Checkbox>
        </List.Item>
      )}
    />
  );
};

export default TodoList;
