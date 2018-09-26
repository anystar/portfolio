import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'section-header',
  templateUrl: './section-header.component.html',
  styleUrls: ['./section-header.component.css']
})
export class SectionHeaderComponent implements OnInit {

  @Input() title: string;
  @Input() subTitle: string;
  @Input() description: string;

  constructor() { }
  
  noSubTitle : Boolean = false;
  noDesc : Boolean = false;
  collasped : Boolean = false;

  toggle () {
    this.collasped = !this.collasped;
  }

  ngOnInit() {

    if (this.subTitle === undefined)
      this.noSubTitle = true;

    if (this.description === undefined)
      this.noDesc = true;
  }

}
