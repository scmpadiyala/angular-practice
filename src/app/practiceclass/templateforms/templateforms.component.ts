import { Component, OnInit } from "@angular/core";


export class Student {
  studentName;
  studentContact = "test@gmail.com";

}

@Component({
  selector: "app-templateforms",
  templateUrl: "./templateforms.component.html",
  styleUrls: ["./templateforms.component.css"]
})
export class TemplateformsComponent implements OnInit {
  constructor() {}

  curStudent = new Student();
  ngOnInit() {}

  handleSubmitForm(studentFromData) {
    console.log("From Data : " + JSON.stringify(studentFromData));
  }
}
