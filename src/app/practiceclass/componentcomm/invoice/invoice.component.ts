import { Component, OnInit } from "@angular/core";
import { OrderMgmtService } from "../../services/order-mgmt.service";

@Component({
  selector: "app-invoice",
  templateUrl: "./invoice.component.html",
  styleUrls: ["./invoice.component.css"]
})
export class InvoiceComponent implements OnInit {
  orderid;

  constructor(private orderService: OrderMgmtService) {}

  ngOnInit() {
    this.orderid = this.orderService.getOrderid();
  }
}
