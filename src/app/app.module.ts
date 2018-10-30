import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { SampleComponent } from "./practiceclass/sample/sample.component";
import { TestComponent } from "./practiceclass/test/test.component";
import { BindingsampleComponent } from "./practiceclass/bindingsample/bindingsample.component";
import { StucturaldirectiveComponent } from './practiceclass/stucturaldirective/stucturaldirective.component';

@NgModule({
  declarations: [
    AppComponent,
    SampleComponent,
    TestComponent,
    BindingsampleComponent,
    StucturaldirectiveComponent
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
