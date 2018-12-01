import { Component, OnInit } from "@angular/core";
import { AdminService } from "../admin.service";

@Component({
  selector: "app-school",
  templateUrl: "./school.component.html",
  styleUrls: ["./school.component.css"]
})
export class SchoolComponent implements OnInit {
  // constructor(private adminService: AdminService) {
  //   adminService.display("SchoolComponent : constructor : ");
  // }

  ngOnInit() {}
}
