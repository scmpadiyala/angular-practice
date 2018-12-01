import { Component, OnInit } from "@angular/core";
import { AdminService } from "../admin.service";

@Component({
  selector: "app-admindetails",
  templateUrl: "./admindetails.component.html",
  styleUrls: ["./admindetails.component.css"],
  // providers: [AdminService]
})
export class AdmindetailsComponent implements OnInit {
  constructor(private adminService: AdminService) {
    this.adminService.display("AdmindetailsComponent : constructor");
  }

  ngOnInit() {}
}
