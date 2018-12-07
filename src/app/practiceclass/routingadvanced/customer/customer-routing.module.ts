import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { NewcustomerComponent } from "./newcustomer/newcustomer.component";
import { ListcustomerComponent } from "./listcustomer/listcustomer.component";
import { GuardService } from "../guard.service";

const routes: Routes = [
  {
    path: "",
    component: NewcustomerComponent, canActivate : [GuardService], 
    canDeactivate : [GuardService],
    resolve : {offers : GuardService}

    children: [{ path: "custlist", component: ListcustomerComponent }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule {}
