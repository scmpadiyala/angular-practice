import { Component, OnInit, OnChanges, SimpleChange } from "@angular/core";

@Component({
  selector: "app-order-com",
  templateUrl: "./order.component.html",
  styleUrls: ["./order.component.css"]
})
export class OrderComponent implements OnInit {
  orderid;
  deliveryMode = "Air";
  constructor() {}

  // ngOnChanges(changes: SimpleChange) {
  //   console.log("NG On Changes called");
  // }

  ngOnInit() {
    this.orderid = 100;
  }

  handleOrderIdChange(e) {
    console.log("order id " + this.orderid);
  }

  handleDeliveryMode(e) {
    console.log("delvery mode : " + e);
    this.deliveryMode = e;
  }
}
