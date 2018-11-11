import { Injectable } from "@angular/core";
import { Order } from "../datamodel/Order";
import { AngularFireDatabase, AngularFireList } from "@angular/fire/database";

@Injectable({
  providedIn: "root"
})
export class OrderMgmtService {
  orderFireList: AngularFireList<Order>;

  constructor(private myDB: AngularFireDatabase) {
    this.orderFireList = this.myDB.list("Order");
  }

  // create order

  createOrder(order: Order) {
    console.log("Inside Service : Order Name : " + order.orderName);
    console.log("Order Customer Name : " + order.customerName);
    console.log("Order Delv Name : " + order.orderDate);
    // Parform Database operations or call API

    // Creat a new record : Create / Insert ==> Push
    //this.orderFireList.push(order);

    // Update a new record

    // this.orderFireList.update("-LR-gSfhZt5tCoxumTed", {customerName : "Ajay Srini"});

    // Set the customer name
    // this.orderFireList.set("-LR-i9ZdT-j6FYF2QSZ0", {
    //   customerName: "Varshini M"
    // });

    // delete
    this.orderFireList.remove("-LR-i9ZdT-j6FYF2QSZ0");
  }
}
