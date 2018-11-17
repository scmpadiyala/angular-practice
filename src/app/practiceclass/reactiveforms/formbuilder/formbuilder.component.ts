import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
  FormArray
} from "@angular/forms";

@Component({
  selector: "app-formbuilder",
  templateUrl: "./formbuilder.component.html",
  styleUrls: ["./formbuilder.component.css"]
})
export class FormbuilderComponent implements OnInit {
  accountRegistrationForm: FormGroup;
  cartItems : FormArray;
  constructor(private fromBuilder: FormBuilder) {}

  ngOnInit() {
    this.buildForm();
  }

  /*
   * FormBuilde will help to crate a form group / from control / form array
   */

  buildForm() {

   // this.cartItems = this.fromBuilder.array([new FormControl()]);

   this.cartItems = new FormArray([new FormControl()]);

    this.accountRegistrationForm = this.fromBuilder.group({
      firstName: ["", Validators.required],
      lastName: [""],
      address: this.fromBuilder.group({
        street: [""],
        country: [""],
        pin: [""]
      }),
      items : this.cartItems
    });

    // new FormGroup({
    //   firstName: new FormControl("", [Validators.required]),
    //   lastName: new FormControl("", [Validators.required]),
    //   address: new FormGroup({
    //     street: new FormControl(),
    //     country: new FormControl(),
    //     pin: new FormControl()
    //   })
    // });
  }

  handleAccountRegistration(accountData) {
    console.log("From Data : " + accountData);
    console.log("From Data : " + JSON.stringify(accountData));
    console.log("From Data : " + accountData.firstName);
    console.log("From Data : " + accountData.lastName);
    // address = this.accountRegistrationForm.get("address");
    // console.log("From Data : " + address.get("street"));
    console.log("From Data : " + accountData.address.street);
  }

  handleAddItem() {
    console.log("Add Item called");
    this.cartItems.push(new FormControl("new"));
    console.log("Add Item ended");
  }

  handleDelteItem() {
    console.log("delete item called " + this.cartItems.length);
    if (this.cartItems.length > 1) {
      this.cartItems.removeAt(this.cartItems.length-1);
    }
  }
}
