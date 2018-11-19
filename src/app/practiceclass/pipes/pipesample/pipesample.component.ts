import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-pipesample",
  templateUrl: "./pipesample.component.html",
  styleUrls: ["./pipesample.component.css"]
})
export class PipesampleComponent implements OnInit {
  totalamount = 4500;

  dateOfJoining = new Date(2002, 3, 15);

  stdids = [1, 2, 3, 4, 5, 6, 7, 8];

  stdName = "Joseph";

  constructor() {}

  ngOnInit() {}

  handleTextChange(e) {
    console.log(e.target.value);
    this.stdName = e.target.value;
  }

  handleStdIdAddition(e) {
    console.log("Std Ids before addition : " + this.stdids);
    console.log("New value to add : " + e.target.value);
    this.stdids.push(e.target.value);
    console.log("Std Ids after addition : " + this.stdids);
  }
}
