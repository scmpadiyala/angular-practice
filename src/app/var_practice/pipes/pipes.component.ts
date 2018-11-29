import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-pipes",
  templateUrl: "./pipes.component.html",
  styleUrls: ["./pipes.component.css"]
})
export class PipesComponent implements OnInit {
  totalAmount = 4500;
  dob = Date.now();

  studentIds = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  constructor() {}

  ngOnInit() {}

  incrementAmout() {
    this.totalAmount = this.totalAmount + 100;
  }

  handleRefreshTime() {
    this.dob = Date.now();
  }

  handleStudentID(e) {
    console.log("Before Additon  : " + this.studentIds);
    this.studentIds.push(e.target.value);
    console.log("After Additon  : " + this.studentIds);
  }

  addStdID() {
    console.log("Before Additon  : " + this.studentIds);

    let largestValue = this.studentIds[this.studentIds.length - 1];

    this.studentIds.push(largestValue + 1);
    console.log("After Additon  : " + this.studentIds);
  }
}
