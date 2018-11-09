import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { OrderMgmtService } from "../services/order-mgmt.service";
import { Order } from "../datamodel/Order";

@Component({
  selector: "app-reactiveforms",
  templateUrl: "./reactiveforms.component.html",
  styleUrls: ["./reactiveforms.component.css"]
})
export class ReactiveformsComponent implements OnInit {
  /*
   * FormControl ==> FormGroup
   */
  orderFormGroup: FormGroup;
  orderId;
  constructor(
    private activatedRoute: ActivatedRoute,
    private orderMgmtService: OrderMgmtService
  ) {}

  ngOnInit() {
    this.orderId = this.activatedRoute.snapshot.paramMap.get("ordId");

    console.log("Order ID : " + this.orderId);

    let orderNameControl = new FormControl();
    let customerNameControl = new FormControl();
    let deliveryDateControl = new FormControl();

    this.orderFormGroup = new FormGroup({
      orderName: orderNameControl,
      customerName: customerNameControl,
      deliveryDate: deliveryDateControl
    });

    // this.orderFormGroup = new FormGroup({
    //   firstName: new FormControl(),
    //   dob: new FormControl()
    // });
  }

  handleOrderForm(orderData) {
    console.log(
      "Inside Component : Order Data : First Name " +
        orderData.customerName +
        " : DOB " +
        orderData.dob
    );

    // orderid;
    // orderName;
    // customerName;
    // orderDate;
    // items;
    // orderStatus;
 // Assigning the value Order data object
    let order: Order = {
      orderid: this.orderId,
      orderName: orderData.orderName,
      customerName: orderData.customerName,
      orderStatus: "new",
      orderDate: "10-Nov",
      items: "items"
    };

    this.orderMgmtService.createOrder(order);
  }
}
