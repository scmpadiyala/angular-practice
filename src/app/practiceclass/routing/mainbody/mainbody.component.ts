import { Component, OnInit } from "@angular/core";
import { StudentManagementService } from "../../services/student-management.service";

@Component({
  selector: "app-mainbody",
  templateUrl: "./mainbody.component.html",
  styleUrls: ["./mainbody.component.css"]
})
export class MainbodyComponent implements OnInit {
  stdManagementService;

  studentList;

  constructor(stdManagementService: StudentManagementService) {
    console.log("1. Constructor");
    this.stdManagementService = stdManagementService;
  }

  ngOnInit() {
    // Call API calls
    console.log("2. NgOnInit");

    this.studentList = this.stdManagementService.getStudentList();

    console.log("Student List : " + this.studentList.length);
  }
}
