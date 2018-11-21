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
import { OrderComponent } from './practiceclass/componentcomm/io/order/order.component';
import { CustomerComponent } from './practiceclass/componentcomm/io/customer/customer.component';
import { InvoiceComponent } from './practiceclass/componentcomm/invoice/invoice.component';
import { FormgroupComponent } from './practiceclass/reactiveforms/formgroup/formgroup.component';
import { FormbuilderComponent } from './practiceclass/reactiveforms/formbuilder/formbuilder.component';
import { OrderfromComponent } from './practiceclass/reactiveforms/orderfrom/orderfrom.component';
import { NgforsampleComponent } from './ajay_practice/ngforsample/ngforsample.component';
import { PipesampleComponent } from './practiceclass/pipes/pipesample/pipesample.component';
import { RevesePipe } from './practiceclass/pipes/revese.pipe';
import { SampledirectiveComponent } from './practiceclass/directives/sampledirective/sampledirective.component';

import { VisibleDirective } from './practiceclass/directives/visible.directive';
import { HighlightDirective } from './practiceclass/directives/highlight.directive';

const myRoutes = [
  { path: "home", component: HomeComponent },
  { path: "login", component: LoginComponent },
  { path: "login/mainbody", component: MainbodyComponent },
  // { path: "order/:ordId", component: ReactiveformsComponent },
  { path: "order", component: ReactiveformsComponent },
  { path: "users", component: RestapiComponent },
  { path: "invoice", component: InvoiceComponent }
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
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(myRoutes),
    HttpClientModule,
    AngularFireModule.initializeApp(DBConfig.config),
    AngularFireDatabaseModule,
  ],
  providers: [StudentManagementService],
  bootstrap: [AppComponent]
})
export class AppModule {}
