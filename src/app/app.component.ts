import { Component } from '@angular/core';

declare var lightGallery: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';
  year: string;

  ngOnInit() {

    this.year = (new Date()).getFullYear().toString();

    var galleries = document.getElementsByClassName('lightgallery');

    for (var i = 0; i < galleries.length; i++) {
      lightGallery(galleries[i], {
        "selector": ".photo"
      });
    }
  }
}
