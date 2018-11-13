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

  getOrderList() {
    return this.orderFireList;
  }

  getOrder(key) {
    return this.myDB.list("Order", ref => ref.orderByKey().equalTo(key));
  }

  // create order

  createOrder(order: Order) {
    // new Order id
    console.log("Order id : Before " + this.orderid);
    this.orderid = order.orderid;
    console.log("Order id : After" + this.orderid);
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

  orderid = "Not known";

  getOrderid() {
    return this.orderid;
  }
}
