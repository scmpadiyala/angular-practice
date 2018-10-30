import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-stucturaldirective",
  templateUrl: "./stucturaldirective.component.html",
  styleUrls: ["./stucturaldirective.component.css"]
})
export class StucturaldirectiveComponent implements OnInit {
  isPrimaryStudent = true;

  isPass = false;

  names = ["Ram", "sam", "Sasi", "ABC"];

  studentCategory = 1; // 1 : Primary 2 : Secondary

  primarySubjects = ["Tamil", "English", "Maths"];

  secondarySubjects = ["Sports", "Special Subject"];

  constructor() {}

  ngOnInit() {}
}
