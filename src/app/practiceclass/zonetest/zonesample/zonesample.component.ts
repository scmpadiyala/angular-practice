import { Component, OnInit, NgZone } from "@angular/core";

@Component({
  selector: "app-zonesample",
  templateUrl: "./zonesample.component.html",
  styleUrls: ["./zonesample.component.css"]
})
export class ZonesampleComponent implements OnInit {
  percentageProgress = 0;

  constructor(private zone: NgZone) {}

  ngOnInit() {}

  handleinsideAngualrZone() {
    this.percentageProgress = 0;
    console.log("Inside the zone start");
    this.processOrder();
    console.log("Inside Zone completed ...");
  }

  handleoutsideAngualrZone() {
    this.percentageProgress = 0;
    console.log("Outside the zone start");

    this.zone.runOutsideAngular(() => this.processOrderOutside());

    console.log("Outside Zone completed ...");
  }

  processOrder() {
    console.log("Order process completed " + this.percentageProgress + "%");
    if (++this.percentageProgress < 10) {
      window.setTimeout(() => {
        this.processOrder();
      }, 100);
    }
  }

  processOrderOutside() {
    console.log("Order process completed " + this.percentageProgress + "%");
    if (++this.percentageProgress < 10) {
      window.setTimeout(() => {
        this.processOrderOutside();
      }, 100);
    } else {
      console.log("Elese Block");
      this.zone.run(() => {
        ++this.percentageProgress;
        console.log("Switching back to the Angular context");
      });
    }
  }
}
