import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../features/todos/todosSlice";
import TodoForm from "../components/TodoForm/TodoForm";

const mapDispatch = { addTodo };

const AddTodo = ({ addTodo }) => {
  return <TodoForm addTodo={addTodo} />;
};

export default connect(null, mapDispatch)(AddTodo);
