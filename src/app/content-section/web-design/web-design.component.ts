import { Component, OnInit } from '@angular/core';

declare var lightGallery: any;

@Component({
  selector: 'web-design',
  templateUrl: './web-design.component.html',
  styleUrls: ['./web-design.component.scss']
})
export class WebDesignComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var galleries = document.getElementsByClassName('lightgallery');
       
    for (var i = 0; i < galleries.length; i++) {
      lightGallery(galleries[i], {
        "selector": ".photo"
      });
    }
  }

}
