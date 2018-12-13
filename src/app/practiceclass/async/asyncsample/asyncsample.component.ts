import { Component, OnInit } from "@angular/core";
import { AsyncsampleService } from "../asyncsample.service";

@Component({
  selector: "app-asyncsample",
  templateUrl: "./asyncsample.component.html",
  styleUrls: ["./asyncsample.component.css"]
})
export class AsyncsampleComponent implements OnInit {
  userList;

  userObserver;

  totalAmount = 4500;

  constructor(private asyncService: AsyncsampleService) {}

  ngOnInit() {
    this.loadUsers();
  }

  // Scenario 1 : Subscribe with callback function of NEXT and ERROR . COMPLETE

  // loadUsers() {
  //   this.asyncService.getUsers().subscribe(
  //     (data => {
  //       console.log("Next Call back function called");
  //       this.userList = data;
  //     }),
  //     exception => console.log("Error : " + JSON.stringify(exception))
  //   );
  // }

  // Scenario 2 : Without Subscribe look how it works -- LAZY Load

  // loadUsers() {
  //   console.log("Load Users : Start");

  //   this.asyncService.getUsers();
  //   // .subscribe(
  //   //   data => {
  //   //     console.log("Next Call back function called");
  //   //     this.userList = data;
  //   //   },
  //   //   exception => console.log("Error : " + JSON.stringify(exception))
  //   // );

  //   console.log("Load Users : END");
  // }

  // Scenario 3 : Working with promise

  // loadUsers() {
  //   console.log("Load Users : Start");

  //   this.asyncService.getUsers().toPromise();

  //   console.log("Load Users : END");
  // }

  // Scenario 4 : Working with promise and listning for response

  // loadUsers() {
  //   console.log("Load Users : Start");

  //   this.asyncService.getUsers().toPromise().then(
  //     data => this.userList = data;
  //   );

  //   console.log("Load Users : END");
  // }

  // Scenario 5 : Async Pipes

  loadUsers() {
    console.log("Load Users : Start");

    this.userObserver = this.asyncService.getUsers();

    // .subscribe(
    //   data => {
    //     console.log("Next Call back function called");
    //     this.userList = data;
    //   },
    //   exception => console.log("Error : " + JSON.stringify(exception))
    // );

    console.log("Load Users : END");
  }
}
