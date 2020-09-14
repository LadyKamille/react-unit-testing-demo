import React from "react";
import { Button, Checkbox, List } from "antd";
import { CloseCircleOutlined } from "@ant-design/icons";
import styles from "./TodoList.module.css";

const TodoList = ({ todos, toggleTodo, removeTodo }) => {
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
          <Button
            type="link"
            icon={<CloseCircleOutlined />}
            onClick={() => removeTodo(todo.id)}
            title="Remove"
            shape="circle"
            danger
          />
        </List.Item>
      )}
    />
  );
};

export default TodoList;
