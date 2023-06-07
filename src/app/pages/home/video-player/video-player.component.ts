import { Component, Input, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { VideoPlayer } from '../../../core/interfaces/video-player';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss'],
  animations: [
    trigger('videoSlide', [state('void', style({ opacity: 0 })), transition('void <=> *', [animate('300ms')])])
  ]
})
export class VideoPlayerComponent implements OnInit {
  @Input() items: VideoPlayer[] = [];
  currentSlideIndex: number = 0;

  constructor() { }

  public ngOnInit(): void { }

  public selectVideo(index: number){
    this.currentSlideIndex = index;
  }

}
