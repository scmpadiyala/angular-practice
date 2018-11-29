import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-child1",
  templateUrl: "./child1.component.html",
  styles: ["h3 {background-color: yellow;}"]
})
export class Child1Component implements OnInit {
  constructor() {}

  ngOnInit() {}
}
