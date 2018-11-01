import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
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

const myRoutes = [
  { path: "home", component: HomeComponent },
  { path: "login", component: LoginComponent },
  { path: "login/mainbody", component: MainbodyComponent }
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
    MainbodyComponent
  ],
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(myRoutes)],
  providers: [StudentManagementService],
  bootstrap: [AppComponent]
})
export class AppModule {}
