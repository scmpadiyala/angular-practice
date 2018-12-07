import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CustomerRoutingModule } from "./customer-routing.module";
import { NewcustomerComponent } from "./newcustomer/newcustomer.component";
import { ListcustomerComponent } from "./listcustomer/listcustomer.component";
import { GuardService } from "../guard.service";
import { FormsModule } from "@angular/forms";

@NgModule({
  imports: [CommonModule, FormsModule, CustomerRoutingModule],
  declarations: [NewcustomerComponent, ListcustomerComponent],
  exports: [NewcustomerComponent, ListcustomerComponent],
  providers: [GuardService]
})
export class CustomerModule {}
