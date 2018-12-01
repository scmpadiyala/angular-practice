import { Component, ViewEncapsulation } from "@angular/core";
// import { AdminService } from "./practiceclass/samplemodule/admin.service";

@Component({
  selector: "app-main",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  encapsulation: ViewEncapsulation.Emulated
})
export class AppComponent {
  title = "angular-practice 1";

  // constructor(private adminService: AdminService) {
  //   adminService.display("AppComponent : constructor");
  // }
}
