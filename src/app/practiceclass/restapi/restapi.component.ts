import { Component, OnInit } from "@angular/core";
import { RestapiService } from "../services/restapi.service";

@Component({
  selector: "app-restapi",
  templateUrl: "./restapi.component.html",
  styleUrls: ["./restapi.component.css"]
})
export class RestapiComponent implements OnInit {
  constructor(private apiService: RestapiService) {}

  userList;

  ngOnInit() {}

  handleGetUsers(e) {
    console.log("1. Event Get Users Called");

    this.apiService.getUsers().subscribe(userData => {
      console.log("2. Data return from service");
      this.userList = userData;
    });

    console.log("3. Service call completed ");
  }
}
