import React, { useState } from "react";
import { useEffect } from "react";
import { Button, Row, Col, Form, Card } from "react-bootstrap";
import { userData } from "./config";
import "./Login.css";

export const Login = () => {
  const [name, setUsername] = useState("");
  const [pass, setPassword] = useState("");
  const [valid, setValid] = useState(true);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (name.length >= 5 && pass.length) {
      setValid(false);
      if (
        userData.UserName == name.trim() &&
        userData.Password === pass.trim()
      ) {
        setIsSuccess(true);
        localStorage.setItem("tokken", userData.token);
      }
    } else setValid(true);
  }, [name, pass]);
  return (
    <div>
      {isSuccess ? (
        <p>You are Logged In</p>
      ) : (
        <div>
          <h1>Login With Validation</h1>

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
                  type="password"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                ></Form.Control>
                <Row>
                  <Button className="buttons" disabled={valid}>
                    Login
                  </Button>
                  <Button className="buttons" disabled={valid}>
                    Cancel
                  </Button>
                </Row>
              </Col>
            </Row>
            {!isSuccess && !valid && (
              <p>Please enter correct Username or Password</p>
            )}
          </Card>
        </div>
      )}
    </div>
  );
};
