import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanDeactivate,
  Resolve
} from "@angular/router";
import { NewcustomerComponent } from "./customer/newcustomer/newcustomer.component";

@Injectable()
export class GuardService
  implements
    CanActivate,
    CanDeactivate<NewcustomerComponent>,
    Resolve<TodayOffers[]> {
  constructor() {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    console.log("I am inside CanActivate");
    // User Login
    // Pre-condition etc.,
    return true;
  }

  canDeactivate(
    component: NewcustomerComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ): boolean {
    console.log("I am inside CanDeActivate" + component.isDirty);
    if (component.isDirty === "false") {
      return confirm("Loose changes");
    }
    return true;
  }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): TodayOffers[] {
    let offers = [
      { id: 100, description: "25% sale order" },
      { id: 101, description: "27% sale order" }
    ];
    console.log("Resolve : " + JSON.stringify(offers));

    return offers;
  }
}

export class TodayOffers {
  id;
  description;
}
