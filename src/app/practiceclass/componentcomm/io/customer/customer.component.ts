import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-customer",
  templateUrl: "./customer.component.html",
  styleUrls: ["./customer.component.css"]
})
export class CustomerComponent implements OnInit {
  orderid;

  /*
   * Defined parentData attribute directive
   */
  @Input()
  parentData;

  @Output()
  deliveryMode = new EventEmitter();

  constructor() {}

  ngOnInit() {
    this.orderid = this.parentData;
  }

  handleDeliveryType(e) {
    console.log("Delivery type : " + e.target.value);
    this.deliveryMode.emit(e.target.value);
  }
}
