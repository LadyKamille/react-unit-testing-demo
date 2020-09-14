import React from "react";
import { Form, Input, Button, Row, Col } from "antd";

const TodoForm = ({ addTodo }) => {
  const [form] = Form.useForm();

  const onSubmit = (values) => {
    addTodo(values.todo);

    form.resetFields();
  };

  return (
    <Form form={form} onFinish={onSubmit} layout="horizontal">
      <Row gutter={8}>
        <Col xs={24} sm={24} md={17} lg={19} xl={20}>
          <Form.Item
            name="todo"
            rules={[{ required: true, message: "This field is required" }]}
          >
            <Input placeholder="What needs to be done?" />
          </Form.Item>
        </Col>
        <Col xs={24} sm={24} md={7} lg={5} xl={4}>
          <Button htmlType="submit">Add Todo</Button>
        </Col>
      </Row>
    </Form>
  );
};

export default TodoForm;
