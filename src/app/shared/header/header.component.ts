import { animate, state, style, transition, trigger } from '@angular/animations';
import { ViewportScroller } from '@angular/common';
import { AfterViewInit, Component, HostListener, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('slideInOut', [
      state('in', style({
        overflow: 'hidden',
        height: '60px',
      })),
      state('out', style({
        opacity: '0',
        overflow: 'hidden',
        height: '0px',
      })),
      transition('in <=> out', animate('250ms ease-in-out'))
    ])
  ]
})
export class HeaderComponent implements AfterViewInit, OnInit {
  public headerOpen: string = 'in';

  public isSidebar: boolean = false;
  public innerWidth: number = 600;
  public visibleSidebar: boolean = false;
  
  public scroll$: any ;
  public startPosition: number = 0;

  constructor(
    private viewportScroller: ViewportScroller,
  ) {}

  @HostListener('window:resize', [])
  private onResize() {
    this.detectScreenSize();
  }
  public ngAfterViewInit() {
    this.detectScreenSize();
  }
  public ngOnInit() {
    this.startPosition = window.scrollY;
    this.scroll$ = fromEvent(window, 'scroll').subscribe(e => {
      const currentPosition = window.scrollY;
      if (!this.visibleSidebar) {
        this.headerOpen = this.startPosition > currentPosition ? 'in' : 'out';
      }
      this.startPosition = currentPosition
    });
  }

  private detectScreenSize() {
    if (this.innerWidth >= window.innerWidth) {
      this.isSidebar = true;
    } else {
      this.isSidebar = false;
    }
  }

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
