import React, { Component } from "react";
import employeeDataService from "../services/employee.service";

const employeeService = new employeeDataService();

export default class AddEmployeeDetail extends Component {
  constructor(props) {
    super(props);
    this.onChangeEmployeeID = this.onChangeEmployeeID.bind(this);
    this.onChangeEmployeename = this.onChangeEmployeename.bind(this);
    this.onChangeEamilID = this.onChangeEamilID.bind(this);
    this.onChangeContactNumber = this.onChangeContactNumber.bind(this);
    this.onChangeGender = this.onChangeGender.bind(this);
    this.onChangeRole = this.onChangeRole.bind(this);
    this.saveDetails = this.saveDetails.bind(this);
    this.newDetails = this.newDetails.bind(this);

    this.state = {
      id: null,
      empid: "",
      employeename: "",
      emailid: "",
      contactno: "",
      gender: "",
      role: "",
      submitted: false
    };
  }

  onChangeEmployeeID(r) {
    this.setState({
      empid: r.target.value
    });
  }

  onChangeEmployeename(r) {
    this.setState({
      employeename: r.target.value
    });
  }

  onChangeEamilID(r) {
    this.setState({
      emailid: r.target.value
    });
  }

  onChangeContactNumber(r) {
    this.setState({
      contactno: r.target.value
    });
  }

  onChangeGender(r) {
    this.setState({
      gender: r.target.value
    });
  }

  onChangeRole(r) {
    this.setState({
      role: r.target.value
    });
  }

  saveDetails() {
    var data = {
      empid: this.state.empid,
      employeename: this.state.employeename,
      emailid: this.state.emailid,
      contactno: this.state.contactno,
      gender: this.state.gender,
      role: this.state.role
    };

    employeeService.create(data).then(response => {
      this.setState({
        id: response.data.id,
        empid: response.data.empid,
        employeename: response.data.employeename,
        emailid: response.data.emailid,
        contactno: response.data.contactno,
        gender: response.data.gender,
        role: response.data.role,
        submitted: true
      });
      console.log(response.data);
    }).catch(error => {
      console.log(error);
    });
  }

  newDetails() {
    this.setState({
      id: null,
      empid: "",
      employeename: "",
      emailid: "",
      contactno: "",
      gender: "",
      role: "",
      submitted: false
    });
  }

  render() {
    return (
      <div className="submit-form">
        {this.state.submitted ? (
          <div>
            <h4>Your Form Successfully Submitted</h4>
            <button className="btn btn-success" onClick={this.newDetails}>
              Add
            </button>
          </div>
        ) : (
          <div>
            <div className="form-group">
              <label htmlFor="empid">Employee ID</label>
              <input
                type="text"
                className="form-control"
                id="empid"
                required
                value={this.state.empid}
                onChange={this.onChangeEmployeeID}
                name="empid"
              />
            </div>

            <div className="form-group">
              <label htmlFor="username">Employee Name</label>
              <input
                type="text"
                className="form-control"
                id="username"
                required
                value={this.state.employeename}
                onChange={this.onChangeEmployeename}
                name="username"
              />
            </div>

            <div className="form-group">
              <label htmlFor="emailid">Email ID</label>
              <input
                type="text"
                className="form-control"
                id="emailid"
                required
                value={this.state.emailid}
                onChange={this.onChangeEamilID}
                name="emailid"
              />
            </div>

            <div className="form-group">
              <label htmlFor="contactno">Contact Number</label>
              <input
                type="text"
                className="form-control"
                id="contactno"
                required
                value={this.state.contactno}
                onChange={this.onChangeContactNumber}
                name="contactno"
              />
            </div>

            <div className="form-group">
              <label htmlFor="gender">Gender</label>
              <input
                type="text"
                className="form-control"
                id="gender"
                required
                value={this.state.gender}
                onChange={this.onChangeGender}
                name="gender"
              />
            </div>

            <div className="form-group">
              <label htmlFor="role">Role</label>
              <input
                type="text"
                className="form-control"
                id="role"
                required
                value={this.state.role}
                onChange={this.onChangeRole}
                name="role"
              />
            </div>

            <button onClick={this.saveDetails} className="btn btn-success">
              Submit
            </button>
          </div>
        )}
      </div>
    );
  }
}