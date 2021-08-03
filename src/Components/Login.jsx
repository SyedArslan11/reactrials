import React, { useState } from "react";
import { Button, Row, Col, Form, Card } from "react-bootstrap";
import "./Login.css";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isValid, setIsvalid] = useState(true);
  return (
    <Card className="firstCard">
      <Row>
        <Col md={8}>
          <Form.Label className="label">Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          ></Form.Control>
          <Form.Label className="label">Password</Form.Label>
          <Form.Control
            type="text"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
          <Row>
            <button className="buttons">Login</button>
            <button className="buttons">Password</button>
          </Row>
        </Col>
      </Row>
    </Card>
  );
};
