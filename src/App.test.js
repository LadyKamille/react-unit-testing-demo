import React from "react";
import { render } from "./utils/test-utils";
import App from "./App";

test("renders learn react link", () => {
  const { container } = render(<App />);

  expect(container).toHaveTextContent("Todo List");
});
