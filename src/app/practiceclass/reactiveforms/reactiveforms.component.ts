import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
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

  orders;
  currentOrder;
  orderId;
  constructor(
    private activatedRoute: ActivatedRoute,
    private orderMgmtService: OrderMgmtService
  ) {}

  /*
   * Validation - sync & async, custom validation
   * sub Group (Form Group ==> Form Group)
   * Form Builder
   */
  ngOnInit() {
    this.orderId = this.activatedRoute.snapshot.paramMap.get("ordId");

    console.log("Order ID : " + this.orderId);

    let orderNameControl = new FormControl("", [
      Validators.required,
      Validators.minLength(5)
    ]);
    let customerNameControl = new FormControl("", [Validators.required]);
    let deliveryDateControl = new FormControl();

    this.orderFormGroup = new FormGroup({
      orderName: orderNameControl,
      customerName: customerNameControl,
      deliveryDate: deliveryDateControl,

      address: new FormGroup({
        steet: new FormControl(),
        city: new FormControl(),
        country: new FormControl(),
        pin: new FormControl()
      })
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
      orderid: this.orderId++,
      orderName: orderData.orderName,
      customerName: orderData.customerName,
      orderStatus: "new",
      orderDate: "10-Nov",
      items: "items"
    };

    this.orderMgmtService.createOrder(order);
  }

  fetchOrder() {
    this.getOrderList();
  }

  getOrderList() {
    this.orderMgmtService
      .getOrderList()
      .snapshotChanges()
      .subscribe(orderData => {
        // Translation/conversion of DB result collection into Order Object for further use

        this.orders = orderData.map(orderEntry => {
          return {
            key: orderEntry.key,
            ...orderEntry.payload.val()
          };
        });
      });
  }

  fetchOrderwithKey(event) {
    let key = event.target.value;

    this.orderMgmtService
      .getOrder(key)
      .snapshotChanges()
      .subscribe(orderData => {
        // Translation/conversion of DB result collection into Order Object for further use

        this.currentOrder = orderData.map(orderEntry => {
          return {
            key: orderEntry.key,
            ...orderEntry.payload.val()
          };
        });
      });
  }
}
