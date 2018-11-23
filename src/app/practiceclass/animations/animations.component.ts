import { Component, OnInit } from "@angular/core";
import { trigger, transition, style, animate } from "@angular/animations";

@Component({
  selector: "app-animations",
  templateUrl: "./animations.component.html",
  styleUrls: ["./animations.component.css"],
  animations: [
    trigger("fadein", [
      transition("void => *", [
        style({ backgroundColor: "green", opacity: 0 }),
        animate(5000)
      ])
    ])
  ]
})
export class AnimationsComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
