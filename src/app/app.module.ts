import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { SampleComponent } from "./practiceclass/sample/sample.component";
import { TestComponent } from "./practiceclass/test/test.component";
import { BindingsampleComponent } from "./practiceclass/bindingsample/bindingsample.component";
import { Bindingsample10Component } from './practiceclass/bindingsample10/bindingsample10.component';

@NgModule({
  declarations: [
    AppComponent,
    SampleComponent,
    TestComponent,
    BindingsampleComponent,
    Bindingsample10Component
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [Bindingsample10Component]
})
export class AppModule {}
