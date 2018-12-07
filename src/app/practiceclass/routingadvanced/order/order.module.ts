import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NeworderComponent } from "./neworder/neworder.component";
import { RouterModule } from "@angular/router";

const routes = [{ path: "", component: NeworderComponent }];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [NeworderComponent],
  exports: [NeworderComponent]
})
export class OrderModule {}
