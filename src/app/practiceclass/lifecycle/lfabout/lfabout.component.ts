import { Component, OnInit, OnDestroy } from "@angular/core";

@Component({
  selector: "app-lfabout",
  templateUrl: "./lfabout.component.html",
  styleUrls: ["./lfabout.component.css"]
})
export class LfaboutComponent implements OnInit, OnDestroy {

  compName = "Test"

  constructor() {}

  ngOnInit() {
    console.log("X. LfaboutComponent ==> ngOnInit");
  }

  ngOnDestroy() {
    console.log("8. LfaboutComponent ==> ngOnDestroy");
  }
}
