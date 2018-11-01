import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class StudentManagementService {
  constructor() {}

  getStudentList() {
    let studentList = [
      { id: "1", name: "sasi", gender: "male" },
      { id: 2, name: "jancy", gender: "female" }
    ];

    return studentList;
  }
}
