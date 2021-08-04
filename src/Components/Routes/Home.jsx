import React from "react";
import { AboutUs } from "./AboutUs";
import { Course1 } from "./Course";
import { ContactUs } from "./ContactUs";
import { Services } from "./Services";
import { NavigationBar } from "./NavigationBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { EmployeeList } from "../Employee/EmploeeList";
import { Login } from "../Login";

export const Home11 = () => {
  return (
    <div>
      <Router>
        <NavigationBar />
        <Switch>
          <div>
            <Route path="/Services">
              <Services />
            </Route>
            <Route path="/AboutUs">
              <AboutUs />
            </Route>
            <Route path="/Course">
              <Course1 />
            </Route>
            <Route path="/ContactUs">
              <ContactUs />
            </Route>
            <Route path="/EmployeeList">
              <EmployeeList />
            </Route>
            <Route path="/Login">
              <Login />
            </Route>
          </div>
        </Switch>
      </Router>
    </div>
  );
};
