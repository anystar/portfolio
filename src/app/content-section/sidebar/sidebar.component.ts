import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'side-bar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SidebarComponent implements OnInit {

  constructor() { }

  open:Boolean = true;

  ngOnInit() {
    
  }

  toggle () {
    this.open = !this.open;
  }

}
