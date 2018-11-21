import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-sampledirective",
  templateUrl: "./sampledirective.component.html",
  styleUrls: ["./sampledirective.component.css"]
})
export class SampledirectiveComponent implements OnInit {
  visibility = "false";
  newColor = "red";

  constructor() {}

  ngOnInit() {}

  handleChange(e) {
    this.visibility = e.target.value;

    console.log("Visibility in Component : " + this.visibility);
  }

  handleChangeColor(e) {
    this.newColor = e.target.value;

    console.log("this new color" + this.newColor);
  }
}
