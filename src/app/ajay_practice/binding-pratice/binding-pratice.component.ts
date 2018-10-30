import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding-pratice',
  template: '<h2> welcome {{name}}</h2>',
  styleUrls: ['./binding-pratice.component.css']
})
export class BindingPraticeComponent implements OnInit {
  private name = "Ajay";
  constructor() { }

  ngOnInit() {
  }

}
