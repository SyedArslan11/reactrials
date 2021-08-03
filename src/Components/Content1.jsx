import React from "react";
import { Card, Button, Dropdown } from "react-bootstrap";
export const Content1 = () => {
  return (
    <Card>
      <Dropdown>
        <Button variant="dark">Split Button</Button>

        <Dropdown.Toggle split variant="dark" id="dropdown-split-basic" />

        <Dropdown.Menu>
          <Dropdown.Item href="https://react-bootstrap.github.io/components/modal/">
            Action
          </Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Card>
  );
};
