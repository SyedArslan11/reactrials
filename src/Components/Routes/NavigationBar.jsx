import React from "react";
import { Nav, Container, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "../A_Navigation/Nav.css";
export const NavigationBar = () => {
  return (
    <div className="navcss">
      <Navbar bg="dark" variant="dark">
        <Container>
          <NavLink to="/Home">
            <Navbar.Brand href="/">PDAC</Navbar.Brand>
          </NavLink>
          <Nav className="me-auto">
            <NavLink to="/ContactUs">Contact Us</NavLink>
            <NavLink to="/Course">Course</NavLink>
            <NavLink to="/Services">Services</NavLink>
            <NavLink to="/AboutUs">About Us</NavLink>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};
