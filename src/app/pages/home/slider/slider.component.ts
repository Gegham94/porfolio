import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { Slider } from '../../../core/interfaces/slider';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  animations: [
    trigger('slideFade', [state('void', style({ opacity: 0 })), transition('void <=> *', [animate('300ms')])])
  ]
})
export class SliderComponent implements OnInit {
  @Input() items: Slider[] = [];
  currentSlideIndex: number = 0;

  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
      this.currentSlideIndex = ++this.currentSlideIndex % this.items.length;
    }, 6000);
  }
}
