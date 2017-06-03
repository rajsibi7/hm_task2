import { Component, OnInit} from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  animations: [
    trigger('slideInOut', [
      state('in', style({
        transform: 'translateX(0)',
        opacity: '1'
      })),
      state('out', style({
        transform: 'translateX(-202%)',
        opacity: '0',
      })),
      transition('in => out', animate('200ms ease-out')),
      transition('out => in', animate('300ms ease-in'))
    ]),
  ]
})
export class SidebarComponent implements OnInit {
  menuState:string = 'out';
  constructor() { }

  ngOnInit() {
  }
  toggle(){
    this.menuState = this.menuState === 'out' ? 'in' : 'out';
  }

}
