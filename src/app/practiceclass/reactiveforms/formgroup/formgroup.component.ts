import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-formgroup",
  templateUrl: "./formgroup.component.html",
  styleUrls: ["./formgroup.component.css"]
})
export class FormgroupComponent implements OnInit {
  accountRegistrationForm: FormGroup;
  constructor() {}

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.accountRegistrationForm = new FormGroup({
      firstName: new FormControl("", [Validators.required]),
      lastName: new FormControl("", [Validators.required]),
      address: new FormGroup({
        street: new FormControl(),
        country: new FormControl(),
        pin: new FormControl()
      })
    });
  }

  handleAccountRegistration(accountData) {
    console.log("From Data : " + accountData);
    console.log("From Data : " + JSON.stringify(accountData));
    console.log("From Data : " + accountData.firstName);
    console.log("From Data : " + accountData.lastName);
    address = this.accountRegistrationForm.get("address");
    console.log("From Data : " + address.get("street"));
    console.log("From Data : " + accountData.address.street);
  }
}
