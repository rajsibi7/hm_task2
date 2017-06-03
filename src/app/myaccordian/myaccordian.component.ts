import { Component, OnInit, ViewChild } from '@angular/core';
import {ChildaccordianComponent} from "../shared/childaccordian/childaccordian.component"

@Component({
  selector: 'app-myaccordian',
  templateUrl: './myaccordian.component.html',
  styleUrls: ['./myaccordian.component.css']
})
export class MyaccordianComponent implements OnInit {

  accordianArr : any;
  @ViewChild(ChildaccordianComponent) public childAccordian :ChildaccordianComponent;
  constructor() { }

  ngOnInit() {
    this.accordianArr = [
      {
      heading : "heading1",
      desc : "my desc"
    },
      {
        heading : "heading1",
        desc : "my desc"
      },
      {
        heading : "heading1",
        desc : "my desc"
      },
      {
        heading : "heading1",
        desc : "my desc"
      }
    ]
  }

}
