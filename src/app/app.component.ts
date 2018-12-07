import { Component, ViewEncapsulation } from "@angular/core";
import { Router } from "@angular/router";
// import { AdminService } from "./practiceclass/samplemodule/admin.service";

@Component({
  selector: "app-main",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  encapsulation: ViewEncapsulation.Emulated
})
export class AppComponent {
  title = "angular-practice 1";

  constructor(private router: Router) {}

  // constructor(private adminService: AdminService) {
  //   adminService.display("AppComponent : constructor");
  // }

  handleCustomerReg() {
    this.router.navigate(["/newcust"]);
  }

  handleNewOrder() {
    this.router.navigate(["/neworder"]);
  }
}
