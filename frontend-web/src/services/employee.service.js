import http from "../common/http-common";

export default class EmployeeDataService {
  getAll() {
    return http.get("/user/all");
  }

  get(empid) {
    return http.get(`/user/${empid}`);
  }

  create(data) {
    return http.post("/user/create", data);
  }

  update(empid, data) {
    return http.put(`/user/update/${empid}`, data);
  }

  delete(empid) {
    return http.delete(`/user/delete/${empid}`);
  }

  deleteAll() {
    return http.delete(`/user/delete`);
  }

  findByEmployeeID(empid) {
    return http.get(`/user?empid=${empid}`);
  }
}
