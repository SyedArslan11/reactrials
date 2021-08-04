import React, { useState, useEffect } from "react";
import { Card, Col, Form, Row } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import "./Employee.css";
import { EmployeeItem } from "./EmployeeItem";
import { employeeReducer } from "./EmployeeReducer";
export const EmployeeList = () => {
  const [empArr, setEmpArr] = useState(employeeReducer.Data);
  const [searchText, setSearchText] = useState("");
  const history = useHistory();
  useEffect(() => {
    const filterArr = empArr.filter(
      (item) =>
        item.firstname.toLowerCase().includes(searchText.toLowerCase()) ||
        item.lastname.toLowerCase().includes(searchText.toLowerCase()) ||
        item.cityname.toLowerCase().includes(searchText.toLowerCase())
    );
    if (searchText === "") setEmpArr(employeeReducer.Data);
    else setEmpArr(filterArr);
    setEmpArr(filterArr);
  }, [searchText]);

  return (
    <div>
      <Card className="employeelist">
        <h2>Employee List</h2>
        <Form.Control
          type="text"
          placeholder="Search"
          onChange={(e) => setSearchText(e.target.value)}
        ></Form.Control>
        <Row>
          {empArr.map((item) => (
            <Col md={4}>
              <EmployeeItem dataDe={item} />
            </Col>
          ))}
        </Row>
      </Card>
    </div>
  );
};
