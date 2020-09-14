import React from "react";
import { Button } from "antd";

const Link = ({ active, children, setVisibilityFilter, filter }) => (
  <Button onClick={() => setVisibilityFilter(filter)} disabled={active}>
    {children}
  </Button>
);

export default Link;
