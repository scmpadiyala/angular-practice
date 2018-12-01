import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Route } from "@angular/router";

import { AppComponent } from "./app.component";
import { SampleComponent } from "./practiceclass/sample/sample.component";
import { TestComponent } from "./practiceclass/test/test.component";
import { BindingsampleComponent } from "./practiceclass/bindingsample/bindingsample.component";
import { StucturaldirectiveComponent } from "./practiceclass/stucturaldirective/stucturaldirective.component";
import { HomeComponent } from "./practiceclass/routing/home/home.component";
import { LoginComponent } from "./practiceclass/routing/login/login.component";
import { MainbodyComponent } from "./practiceclass/routing/mainbody/mainbody.component";
import { StudentManagementService } from "./practiceclass/services/student-management.service";
import { ReactiveformsComponent } from "./practiceclass/reactiveforms/reactiveforms.component";
import { RestapiComponent } from "./practiceclass/restapi/restapi.component";
import { HttpClientModule } from "@angular/common/http";
import { AngularFireModule } from "@angular/fire";
import { AngularFireDatabaseModule } from "@angular/fire/database";
import { DBConfig } from "./practiceclass/services/DBConfig";
import { OrderComponent } from "./practiceclass/componentcomm/io/order/order.component";
import { CustomerComponent } from "./practiceclass/componentcomm/io/customer/customer.component";
import { InvoiceComponent } from "./practiceclass/componentcomm/invoice/invoice.component";
import { FormgroupComponent } from "./practiceclass/reactiveforms/formgroup/formgroup.component";
import { FormbuilderComponent } from "./practiceclass/reactiveforms/formbuilder/formbuilder.component";
import { OrderfromComponent } from "./practiceclass/reactiveforms/orderfrom/orderfrom.component";
import { NgforsampleComponent } from "./ajay_practice/ngforsample/ngforsample.component";
import { PipesampleComponent } from "./practiceclass/pipes/pipesample/pipesample.component";
import { RevesePipe } from "./practiceclass/pipes/revese.pipe";
import { SampledirectiveComponent } from "./practiceclass/directives/sampledirective/sampledirective.component";

import { VisibleDirective } from "./practiceclass/directives/visible.directive";
import { HighlightDirective } from "./practiceclass/directives/highlight.directive";
import { TemplateformsComponent } from "./practiceclass/templateforms/templateforms.component";
import { AnimationsComponent } from "./practiceclass/animations/animations.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { I18nhomeComponent } from './practiceclass/i18n/i18nhome/i18nhome.component';
import { I18AboutComponent } from './practiceclass/i18n/i18-home/i18-home.component';
import { I18ContactComponent } from './practiceclass/i18n/i18-contact/i18-contact.component';

//i18N translate required API
import {TranslateModule, TranslateLoader, TranslateStaticLoader} from "ng2-translate";
import { Http } from "@angular/http";
import { PipesComponent } from './var_practice/pipes/pipes.component';
import { PipesPipe } from './var_practice/pipes.pipe';
import { Sample1Component } from './practiceclass/styles/sample1/sample1.component';
import { SampleStyleComponent } from './practiceclass/styles/sample/sample.component';
import { Child1Component } from './practiceclass/styles/child1/child1.component';
import { LfhomeComponent } from './practiceclass/lifecycle/lfhome/lfhome.component';
import { LfaboutComponent } from './practiceclass/lifecycle/lfabout/lfabout.component';
import { LfcontactComponent } from './practiceclass/lifecycle/lfcontact/lfcontact.component';
import { SamplemoduleModule } from "./practiceclass/samplemodule/samplemodule.module";
import { AdmindetailsComponent } from "./practiceclass/samplemodule/admindetails/admindetails.component";
// import { AdmissionComponent } from './practiceclass/admission/admission.component';

export function createTranslateLoader(http: Http) {
  return new TranslateStaticLoader(http, "./assets/i18n", ".json");
 }

// i18N end

const myRoutes = [
  { path: "home", component: HomeComponent },
  { path: "login", component: LoginComponent },
  { path: "login/mainbody", component: MainbodyComponent },
  // { path: "order/:ordId", component: ReactiveformsComponent },
  { path: "order", component: ReactiveformsComponent },
  { path: "users", component: RestapiComponent },
  { path: "invoice", component: InvoiceComponent,
  {path: "i18nhome", component : I18AboutComponent},
  {path: "i18ncontact", component: I18ContactComponent},
  {path : "lfabout", component : LfaboutComponent},
  {path : "lfcontact", component : LfcontactComponent},
  {path : "admdetail", component : AdmindetailsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    SampleComponent,
    TestComponent,
    BindingsampleComponent,
    StucturaldirectiveComponent,
    HomeComponent,
    LoginComponent,
    MainbodyComponent,
    ReactiveformsComponent,
    RestapiComponent,
    OrderComponent,
    CustomerComponent,
    InvoiceComponent,
    FormgroupComponent,
    FormbuilderComponent,
    OrderfromComponent,
    NgforsampleComponent,
    PipesampleComponent,
    RevesePipe,
    SampledirectiveComponent,
    VisibleDirective,
    HighlightDirective,
    TemplateformsComponent,
    AnimationsComponent,
    I18nhomeComponent,
    I18AboutComponent,
    I18ContactComponent,
    PipesComponent,
    PipesPipe,
    SampleStyleComponent,
    Sample1Component,
    Child1Component,
    LfhomeComponent,
    LfaboutComponent,
    LfcontactComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(myRoutes),
    HttpClientModule,
    AngularFireModule.initializeApp(DBConfig.config),
    AngularFireDatabaseModule,
    TranslateModule.forRoot({provide: TranslateLoader,
      useFactory: createTranslateLoader, deps: [Http]}),
      SamplemoduleModule
  ],
  providers: [StudentManagementService],
  bootstrap: [AppComponent]
})
export class AppModule {}
