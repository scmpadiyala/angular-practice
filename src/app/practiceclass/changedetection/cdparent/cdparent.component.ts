import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";

@Component({
  selector: "app-cdparent",
  templateUrl: "./cdparent.component.html",
  styleUrls: ["./cdparent.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CdparentComponent implements OnInit {
  stdid = [10, 11, 12, 13, 14, 15, 16];

  student = {id: 100, name:"sasi"};

  constructor() {}
  ngOnInit() {}

  handleAddStdid(e) {

    console.log("Before addition : " + this.stdid);
    this.stdid.push(e.target.value);
    console.log("After addition : " + this.stdid);
  }
}
