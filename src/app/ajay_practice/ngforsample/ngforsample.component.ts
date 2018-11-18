import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngforsample',
  templateUrl: './ngforsample.component.html',
  styleUrls: ['./ngforsample.component.css']
})
export class NgforsampleComponent implements OnInit {

  studentName = ["name1", "name2", "name3", "name4"]

  constructor() { }

  ngOnInit() {
  }

}
