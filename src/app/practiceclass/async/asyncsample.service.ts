import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class AsyncsampleService {
  constructor(private httpService: HttpClient) {}

  getUsers() {

    console.log("Get Users called ... : Start")

    let userObservable: Observable<User>;

    userObservable = this.httpService.get(
      "https://jsonplaceholder.typicode.com/users"
    );

    console.log("Get Users called ... : End")
    return userObservable;
  }

  // getUsers() {
  //  return  this.httpService.get("https://jsonplaceholder.typicode.com/users");
  // }
}

export class User {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
  }

