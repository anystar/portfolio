import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'icon-block',
  templateUrl: './icon-block.component.html',
  styleUrls: ['./icon-block.component.css']
})
export class IconBlockComponent implements OnInit {

  @Input() icons: string[];
  @Input() header: string;
  columnCount: string;

  constructor() { }

  ngOnInit() {

  }

}
