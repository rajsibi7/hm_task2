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
      heading : "What is Lorem Ipsum",
      desc : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled."
    },
      {
        heading : "Why do we use it",
        desc : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled."
      },
      {
        heading : "Where does it come from",
        desc : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled."
      },
      {
        heading : "Where can I get some",
        desc : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled."
      }
    ]
  }

}
