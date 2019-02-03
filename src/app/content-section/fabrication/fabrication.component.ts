import { Component, OnInit } from '@angular/core';

declare var lightGallery: any;

@Component({
  selector: 'fabrication',
  templateUrl: './fabrication.component.html',
  styleUrls: ['./fabrication.component.scss']
})
export class FabricationComponent implements OnInit {

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
