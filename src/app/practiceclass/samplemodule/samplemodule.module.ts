import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { AdmissionComponent } from "./admission/admission.component";
import { AdmindetailsComponent } from "./admindetails/admindetails.component";
import { AdminService } from "./admin.service";
import { SchoolComponent } from "./school/school.component";

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [AdmissionComponent, AdmindetailsComponent, SchoolComponent],
  exports: [AdmissionComponent, AdmindetailsComponent, SchoolComponent]
  // providers: [AdminService]
})
export class SamplemoduleModule {}
