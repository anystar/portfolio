import { Component, OnInit, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'video-player',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {

  @ViewChild('myVideo') video;
  @Input() name: string;
  @Input() header: string;
  @Input() subHeader: string;

  progress: string = "0%";
  buffered: TimeRanges;
  
  isPaused: boolean;

  playLeft = 0;
  playTop = 0;
  playCursorVisible = false;

  constructor() { }

  ngOnInit() {
    this.buffered = this.video.buffered;

    window.addEventListener ("scroll", () => {
      
      if (!this.isPaused)
      {
        let rect = this.offset(this.video.nativeElement);

        let x = rect.left, y = rect.top, w = this.video.nativeElement.offsetWidth, h = this.video.nativeElement.offsetHeight, r = x + w, //right
        b = y + h, //bottom
        visibleX, visibleY, visible;

        visibleX = Math.max(0, Math.min(w, window.pageXOffset + window.innerWidth - x, r - window.pageXOffset));
        visibleY = Math.max(0, Math.min(h, window.pageYOffset + window.innerHeight - y, b - window.pageYOffset));
    
        visible = visibleX * visibleY / (w * h);

        if (visible > 0.8) {
            this.play();
        } else {
            this.stop();
        }
      }
    });
  }

  updateProgress() {
    var progress = this.video.nativeElement.currentTime / this.video.nativeElement.duration;
    this.progress = (progress * 100) + "%";

    console.log();
  }

  playpause () {
    this.isPaused = !this.isPaused;

    if (this.isPaused)
      this.video.nativeElement.pause();
    else
      this.video.nativeElement.play();      
  }

  play () {
    this.video.nativeElement.play();
  }

  stop() {
    this.video.nativeElement.pause();
  }

  offset(el) {
    var rect = el.getBoundingClientRect(),
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
  }

  mouseFollow (evt) {
    this.playLeft = evt.layerX;
    this.playTop = evt.layerY;

    this.playCursorVisible = true;
  }

  mouseOut () {
    this.playCursorVisible = false;
  }

  progressMouseOver (evt) {
    this.video.nativeElement.currentTime = this.video.nativeElement.duration * (evt.offsetX / evt.target.offsetWidth);
  }

}
