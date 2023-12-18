import React, { Component } from "react";
import employeeDataService from "../services/employee.service";
import { withRouter } from "../common/with-router";

class Employee extends Component {
  constructor(props) {
    super(props);
    this.onChangeEmployeeID = this.onChangeEmployeeID.bind(this);
    this.onChangeEmployeename = this.onChangeEmployeename.bind(this);
    this.onChangeEmailID = this.onChangeEmailID.bind(this);
    this.onChangeContactNumber = this.onChangeContactNumber.bind(this);
    this.onChangeGender = this.onChangeGender.bind(this);
    this.onChangeRole = this.onChangeRole.bind(this);
    this.getEmployee = this.getEmployee.bind(this);
    this.updateEmployee = this.updateEmployee.bind(this);
    this.deleteEmployee = this.deleteEmployee.bind(this);

    this.state = {
      currentEmployee: {
        id: null,
        empid: "",
        employeename: "",
        emailid: "",
        contactno: "",
        gender: "",
        role: "",
      },
      message: "",
    };
  }

  componentDidMount() {
    this.getEmployee(this.props.router.params.empid);
  }

  onChangeEmployeeID(r) {
    const empid = r.target.value;

    this.setState((prevState) => {
      return {
        currentEmployee: {
          ...prevState.currentEmployee,
          empid: empid,
        },
      };
    });
  }

  onChangeEmployeename(r) {
    const employeename = r.target.value;

    this.setState((prevState) => {
      return {
        currentEmployee: {
          ...prevState.currentEmployee,
          employeename: employeename,
        },
      };
    });
  }

  onChangeEmailID(r) {
    const emailid = r.target.value;

    this.setState((prevState) => {
      return {
        currentEmployee: {
          ...prevState.currentEmployee,
          emailid: emailid,
        },
      };
    });
  }

  onChangeContactNumber(r) {
    const contactno = r.target.value;

    this.setState((prevState) => {
      return {
        currentEmployee: {
          ...prevState.currentEmployee,
          contactno: contactno,
        },
      };
    });
  }

  onChangeGender(r) {
    const gender = r.target.value;

    this.setState((prevState) => {
      return {
        currentEmployee: {
          ...prevState.currentEmployee,
          gender: gender,
        },
      };
    });
  }

  onChangeRole(r) {
    const role = r.target.value;

    this.setState((prevState) => {
      return {
        currentEmployee: {
          ...prevState.currentEmployee,
          role: role,
        },
      };
    });
  }

  getEmployee(empid) {
    employeeDataService.get(empid)
      .then((response) => {
        this.setState({
          currentEmployee: response.data,
        });
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  updateEmployee() {
    employeeDataService.update(this.state.currentEmployee.empid, this.state.currentEmployee)
      .then((response) => {
        console.log(response.data);
        this.setState({
          message: `Data updated successfully`,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  deleteEmployee() {
    employeeDataService.delete(this.state.currentEmployee.empid)
      .then((response) => {})
      .catch(error =>{
        console.log(error)
      });
  }

  render() {
    const {currentEmployee} = this.state
    return (
      <div>
        {currentEmployee? (
          <div className="edit-form">
            <h3>Employee Details</h3>
            <form>
            <div className="form-group">
                <label htmlFor="empid">Employee ID</label>
                <input
                type="text"
                className="form-control"
                id="empid"
                value={currentEmployee.empid}
                onChange={this.onChangeEmployeeID} 
                />
              </div>
              <div className="form-group">
                <label htmlFor="employeename">Employee Name</label>
                <input
                type="text"
                className="form-control"
                id="employeename"
                value={currentEmployee.employeename}
                onChange={this.onChangeEmployeename} 
                />
              </div>
              <div className="form-group">
                <label htmlFor="emailid">Email ID</label>
                <input
                type="text"
                className="form-control"
                id="emailid"
                value={currentEmployee.emailid}
                onChange={this.onChangeEmailID} 
                />
              </div>
              <div className="form-group">
                <label htmlFor="contactno">Contact Number</label>
                <input
                type="text"
                className="form-control"
                id="contactno"
                value={currentEmployee.contactno}
                onChange={this.onChangeContactNumber} 
                />
              </div>
              <div className="form-group">
                <label htmlFor="gender">Gender</label>
                <input
                type="text"
                className="form-control"
                id="gender"
                value={currentEmployee.gender}
                onChange={this.onChangeGender} 
                />
              </div>
              <div className="form-group">
                <label htmlFor="role">Role</label>
                <input
                type="text"
                className="form-control"
                id="role"
                value={currentEmployee.role}
                onChange={this.onChangeRole} 
                />
              </div>
            </form>
            <button
              type="button"
              className="btn btn-success"
              onClick={this.updateEmployee}
            >
              Update
            </button>
            <button
              type="button"
              className="btn btn-danger"
              onClick={this.deleteEmployee}
            >
              Delete
            </button>
            <div className="mt-3">
              <p>{this.state.message}</p>
            </div>
          </div>
        ):(
          <div>
            <br />
            <p>Please click on a Employee</p>
          </div>
        )}
      </div>
    );
  }
}

export default withRouter(Employee);