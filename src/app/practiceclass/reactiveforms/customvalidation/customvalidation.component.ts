import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { emailValidation } from "./emailcustvalidation";
import { MyCustomValidator } from "./MyCustomValidator";

@Component({
  selector: "app-customvalidation",
  templateUrl: "./customvalidation.component.html",
  styleUrls: ["./customvalidation.component.css"]
})
export class CustomvalidationComponent implements OnInit {
  userFormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.userFormGroup = this.fb.group({
      userName: "a",
      email: [
        "a",
        [
          Validators.required,
          Validators.minLength(5),
          MyCustomValidator.validate
        ]
      ],
      pswd: "a",
      cpswd: "a"
    });
  }

  handleRegistration() {
    console.log("Form Value : " + JSON.stringify(this.userFormGroup.value));
  }

  handleEmailChange() {
    let emailControl = this.userFormGroup.get("email");

    console.log("Email Value Validation " + emailControl.invalid);
    console.log("Email Value " + JSON.stringify(emailControl.errors));
  }
}
