import { Validator, AbstractControl } from "@angular/forms";

export class MyCustomValidator {
  //implements Validator {
  static validate(control: AbstractControl) {
    console.log("Hi I am called : " + control.value);

    // Validation
    if (control && control.value != null && control.value != undefined) {
      let email: string = control.value;

      

      if (email.indexOf("@") == -1) {

        

        return {
          emialvalidation:
            "not satisfied @ domain name is mandatory for email id"
        };
      } else {
       // valdateUniqueUserEmial(email);
        return null;
      }


     

    } else {
      return null;
    }
  }


//   statis valdateUniqueUserEmial(email) {

//     let httpClient;

//      httpClient.get("https://jsonplaceholder.typicode.com/users?email="+email).subscribe(data 
//      => 
//      {
//          if(data.length==0) {
//              // unique and allow registration
//              return null;
//          } else {
//              // this not unique : Validation failed enter a valid email
//              new Promise({})
//          } });
//   }
// }
