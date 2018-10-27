import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-binding",
  templateUrl: "./bindingsample.component.html",
  styleUrls: ["./bindingsample.component.css"]
})
export class BindingsampleComponent implements OnInit {
  private name = "Sample Project";

  defaultUserID = "10010";
  i = 0;

  subject = "Science";

  constructor() {
    console.log("Constructor");
  }

  ngOnInit() {
    console.log("ngOnInit");
  }

  handleChangeName(e) {
    console.log("Changed Value : " + e.target.value);
  }

  handleResetName(event) {
    console.log("Reset Name event called ");

    this.name = this.name + this.i++;

    console.log("Subject : " + this.subject);
  }
}
