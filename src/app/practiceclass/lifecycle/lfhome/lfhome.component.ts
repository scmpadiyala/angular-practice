import {
  Component,
  Input,
  OnInit,
  OnChanges,
  SimpleChanges,
  DoCheck
} from "@angular/core";
import { FormBuilder } from "@angular/forms";

@Component({
  selector: "app-lfhome",
  templateUrl: "./lfhome.component.html",
  styleUrls: ["./lfhome.component.css"]
})
export class LfhomeComponent implements OnChanges, OnInit, DoCheck {
  @Input() parentTitle: any;

  stdid;
  stdName;

  /*
   * Initialize the classs level members and inject the services etc.,
   */
  constructor() {
    console.log("0. LfhomeComponent ==> Constructor ");

    // console.log("Input : prameter value : " + this.parentTitle);
  }

  ngOnChanges(simpleChange: SimpleChanges) {
    console.log("1. LfhomeComponent ==>  ngOnChanges");
    // console.log("Input : prameter value : " + this.parentTitle);
    console.log("Simple Changes : " + JSON.stringify(simpleChange));
  }

  /*
   *  Heavy operations : Database load / API calls etc.,
   */
  ngOnInit() {
    console.log("2. LfhomeComponent ==>  ngOnInit");
  }

  ngDoCheck() {
    console.log("3. LfhomeComponent ==>  ngDoCheck");
  }

  ngAfterContentInit() {
    console.log("4. LfhomeComponent ==>  ngAfterContentInit");
  }

  ngAfterContentChecked() {
    console.log("5. LfhomeComponent ==>  ngAfterContentChecked");
  }

  ngAfterViewInit() {
    console.log("6. LfhomeComponent ==>  ngAfterViewInit");
  }

  ngAfterViewChecked() {
    console.log("7. LfhomeComponent ==>  ngAfterViewChecked");
  }
}
