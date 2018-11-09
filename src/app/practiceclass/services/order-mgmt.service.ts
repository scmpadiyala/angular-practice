import { Injectable } from "@angular/core";
import { Order } from "../datamodel/Order";

@Injectable({
  providedIn: "root"
})
export class OrderMgmtService {
  constructor() {}

  // create order

  createOrder(order: Order) {
    console.log("Inside Service : Order Name : " + order.orderName);
    console.log("Order Customer Name : " + order.customerName);

    // Parform Database operations or call API
  }
}
