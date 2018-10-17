import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'video-player',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {

  @ViewChild('myVideo') myVideo: ElementRef;
  @Input() name: string;

  progress: string;
  buffered: TimeRanges;


  constructor() { }

  ngOnInit() {
    this.buffered = this.myVideo.nativeElement.buffered

  }

  updateProgress() {
    var progress = this.myVideo.nativeElement.currentTime / this.myVideo.nativeElement.duration;
    this.progress = (progress * 100) + "%";
  }

  play () {
    this.myVideo.nativeElement.play();
  }

  stop() {
    this.myVideo.nativeElement.pause();
  }

}
