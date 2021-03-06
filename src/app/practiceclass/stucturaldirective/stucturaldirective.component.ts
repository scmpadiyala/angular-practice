import { Component, OnInit } from "@angular/core";

class Student {
  studentCategory = 1;
}

@Component({
  selector: "app-stucturaldirective",
  templateUrl: "./stucturaldirective.component.html",
  styleUrls: ["./stucturaldirective.component.css"]
})
export class StucturaldirectiveComponent implements OnInit {
  isPrimaryStudent = true;

  isPass = false;

  names = ["Ram", "sam", "Sasi", "ABC"];

  students = [
    { name: "ram", id: 432432, gender: "male", dob: "10-10-18" },
    { name: "sasi", id: 432432, gender: "female" },
    { name: "john", id: 4324332, gender: "male" }
  ];

  //studentCategory = 1; // 1 : Primary 2 : Secondary

  myStudent = new Student();

  primarySubjects = ["Tamil", "English", "Maths"];

  secondarySubjects = ["Sports", "Special Subject"];

  constructor() {}

  ngOnInit() {}
}
