import { Component, OnInit } from "@angular/core";
import { AdminService } from "../admin.service";

@Component({
  selector: "app-admission",
  templateUrl: "./admission.component.html",
  styleUrls: ["./admission.component.css"],
  providers: [AdminService]
})
export class AdmissionComponent implements OnInit {
  constructor(private adminService: AdminService) {
    this.adminService.display("AdmissionComponent : constructor");
  }

  ngOnInit() {
    this.adminService.display("AdmissionComponent : ngOnInit");
  }
}
