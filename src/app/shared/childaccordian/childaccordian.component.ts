import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-childaccordian',
  templateUrl: './childaccordian.component.html',
  styleUrls: ['./childaccordian.component.css']
})
export class ChildaccordianComponent implements OnInit {


  @Input() data:Array<any>;
  @Input() deafultStatus:any;

  constructor() { }

  ngOnInit() {

      this.setDeafultStatus(this.deafultStatus);
  }

  openAccordin(index){
    if(this.deafultStatus == 'oneAtaTIme'){
      this.data.filter(list =>{
        list.openstatus = 'closes';
      });

    }
    this.data[index]['openstatus'] = this.data[index]['openstatus'] == "opens" ? "closes" : "opens";

  }

  setDeafultStatus(s) {
    if (s == 'openAlways' || s == 'closeAlways') {
    this.data.filter(list =>{
      if(s == 'openAlways'){
        list.openstatus = 'opens';
      }
      else {
        list.openstatus = 'closes'
      }

    })
    }
  }

}
