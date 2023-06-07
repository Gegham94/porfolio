import { Component } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

  constructor(private viewportScroller: ViewportScroller) { }

  public scrollToContent(item: string) {
    switch(item) {
      case 'videos':
        this.viewportScroller.scrollToAnchor('videos');
      break;
      case 'gallery':
        this.viewportScroller.scrollToAnchor('gallery');
      break;
      case 'experience':
        this.viewportScroller.scrollToAnchor('experience');
      break;
      case 'projects':
        this.viewportScroller.scrollToAnchor('projects');
      break;
    }
  }
}
