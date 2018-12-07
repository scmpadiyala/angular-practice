import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-stdhome",
  templateUrl: "./stdhome.component.html",
  styleUrls: ["./stdhome.component.css"]
})
export class StdhomeComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  handleRegistration() {
    this.router.navigate(["stdreg"]);
  }
}
