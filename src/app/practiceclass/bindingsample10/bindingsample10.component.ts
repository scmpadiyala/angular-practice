import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bindingsample10',
  templateUrl: './bindingsample10.component.html',
  styleUrls: ['./bindingsample10.component.css']
})
export class Bindingsample10Component implements OnInit {
  private sitename = 'Amazon'
  i = 0;
  default_name = "default";
    max_length = 100;
  middle_align = "middle";
  constructor() { }

  handlenamechange (event) {
    this.default_name = "default name is given";
    console.log(event.target.value);

  }
  ngOnInit() {
  }

}
