import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-newcustomer",
  templateUrl: "./newcustomer.component.html",
  styleUrls: ["./newcustomer.component.css"]
})
export class NewcustomerComponent implements OnInit {
  isDirty = "true";

  todayOffers = [];

  constructor(private activateRoute: ActivatedRoute) {
    this.todayOffers = this.activateRoute.snapshot.data["offers"];

    console.log("offers recived : " + this.todayOffers);
  }

  ngOnInit() {}
}
