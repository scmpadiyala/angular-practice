import { Injectable } from "@angular/core";
import { SamplemoduleModule } from "./samplemodule.module";
import { AdmissionComponent } from "./admission/admission.component";

@Injectable()
//   {
//   // providedIn: AdmissionComponent
// }
export class AdminService {
  constructor() {}

  i = 0;

  display(title?: any) {
    console.log(title + " : AdminService : " + this.i++);
  }
}
