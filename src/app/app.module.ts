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

const myRoutes = [
  { path: "home", component: HomeComponent },
  { path: "login", component: LoginComponent },
  { path: "login/mainbody", component: MainbodyComponent },
  { path: "order/:ordId", component: ReactiveformsComponent },
  { path: "users", component: RestapiComponent }
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
    RestapiComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(myRoutes),
    HttpClientModule
  ],
  providers: [StudentManagementService],
  bootstrap: [AppComponent]
})
export class AppModule {}
