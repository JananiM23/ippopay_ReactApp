import React, { Component } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AddEmployeeDetail from "./components/add-employee.component";
import Employees from "./components/employee.component";
import EmployeeList from "./components/employees-list.component";

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <Link to={"/employees"} className="navbar-brand">
            Employee Details Form
          </Link>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/employees"} className="nav-link">
                Employee List
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/add"} className="nav-link">
                New Employee
              </Link>
            </li>
          </div>
        </nav>

        <div className="container mt-3">
          <Routes>
            <Route path="/" element={<EmployeeList/>} />
            <Route path="/employees" element={<EmployeeList/>} />
            <Route path="/add" element={<AddEmployeeDetail/>} />
            <Route path="/employees/:empid" element={<Employees/>} />
          </Routes>
        </div>
      </div>
    );
  }
}

export default App;