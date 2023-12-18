import React, { Component } from "react";
import employeeDataService from "../services/employee.service";
import { Link } from "react-router-dom";

const employeeService = new employeeDataService();

export default class EmployeeList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      employees: [],
      searchEmployeeID: "",
      filteredEmployees: [],
    };
  }

  componentDidMount() {
    this.retrieveEmployeeDetails();
  }

  retrieveEmployeeDetails() {
    employeeService.getAll()
      .then((response) => {
        this.setState({
          employees: response.data.response.data,
          filteredEmployees: response.data.response.data,
        });
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  
  search = () => {
    const { searchEmployeeID, employees } = this.state;
    const filteredEmployees = employees.filter((employee) =>
      employee.empid.toString().includes(searchEmployeeID)
    );

    this.setState({ filteredEmployees });
  };

  renderTableRows() {
    const { filteredEmployees } = this.state;

    return filteredEmployees.map((employee) => (
      <tr key={employee._empid}>
        <td>
          <Link to={`/user-details/${employee._empid}`}>{employee.empid}</Link>
        </td>
        <td>{employee.employeename}</td>
        <td>{employee.emailid}</td>
        <td>{employee.contactno}</td>
        <td>{employee.gender}</td>
        <td>{employee.role}</td>
      </tr>
    ));
  }

    render() {
      return (
        <div className="list row">
          <div className="col-md-8">
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Search by employee ID"
                value={this.state.searchEmployeeID}
                onChange={(e) => this.setState({ searchEmployeeID: e.target.value })}
              />
              <div className="input-group-append">
                <button
                  className="btn btn-outline-secondary"
                  type="button"
                  onClick={this.search}
                >
                  Search
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-12">
            <h3>Employees Info</h3>
            <table className="table">
              <thead>
                <tr>
                  <th>Employee ID</th>
                  <th>Employee Name</th>
                  <th>Email ID</th>
                  <th>ContactNo</th>
                  <th>Gender</th>
                  <th>Role</th>
                </tr>
              </thead>
              <tbody>
                {this.renderTableRows()}
              </tbody>
            </table>
          </div>
        </div>
      );
          }
        }