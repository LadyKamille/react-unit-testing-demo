import React from "react";
import { Row, Col } from "antd";
import "./styles.css";
import AddTodo from "./containers/AddTodo";
import VisibleTodoList from "./containers/VisibleTodoList";
import Footer from "./containers/Footer";

export default function App() {
  return (
    <div className="App">
      <h1>Todo List</h1>
      <Row justify="center" gutter={[16, 24]}>
        <Col span={18}>
          <AddTodo />
        </Col>
      </Row>
      <Row justify="center" gutter={[16, 24]}>
        <Col span={18}>
          <VisibleTodoList />
        </Col>
      </Row>
      <Row justify="center" gutter={[16, 24]}>
        <Col span={18}>
          <Footer />
        </Col>
      </Row>
    </div>
  );
}
