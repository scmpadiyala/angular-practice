import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { SampleComponent } from "./practiceclass/sample/sample.component";
import { TestComponent } from "./practiceclass/test/test.component";
import { BindingsampleComponent } from "./practiceclass/bindingsample/bindingsample.component";
<<<<<<< HEAD
import { StucturaldirectiveComponent } from './practiceclass/stucturaldirective/stucturaldirective.component';
=======
import { Bindingsample10Component } from './practiceclass/bindingsample10/bindingsample10.component';
>>>>>>> 0b4a3395d076b6edbd51fb9b686b9c4f0822e150

@NgModule({
  declarations: [
    AppComponent,
    SampleComponent,
    TestComponent,
    BindingsampleComponent,
<<<<<<< HEAD
    StucturaldirectiveComponent
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
=======
    Bindingsample10Component
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [Bindingsample10Component]
>>>>>>> 0b4a3395d076b6edbd51fb9b686b9c4f0822e150
})
export class AppModule {}
