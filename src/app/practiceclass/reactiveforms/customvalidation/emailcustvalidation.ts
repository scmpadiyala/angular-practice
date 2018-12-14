import { AbstractControl } from "@angular/forms";
import { EMLINK } from "constants";

/*
 *  Retun null if the value of the control is Valid
 *  OR retun validation error object
 */
export function emailValidation(control: AbstractControl) {
  console.log("Hi I am called : " + control.value);

  // Validation
  if (control && control.value != null && control.value != undefined) {
    let email: string = control.value;

    if (email.indexOf("@") == -1) {
      return {
        emialvalidation: "not satisfied @ domain name is mandatory for email id"
      };
    } else {
      return null;
    }
  } else {
    return null;
  }
}
