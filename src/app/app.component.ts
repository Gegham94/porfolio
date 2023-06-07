import { AfterViewInit, Component, HostListener, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit, OnInit {
  public title: string = 'gh-story';
  public showScrollUpButton: boolean = false;

  constructor(private primengConfig: PrimeNGConfig) { }

  public ngOnInit() {
    this.primengConfig.ripple = true;
  }

  @HostListener('window:scroll', [])
  private onScroll() {
    this.detectScroll();
  }
  public ngAfterViewInit() {
    this.detectScroll();
  }
  
  public scrollToElement($element: HTMLElement): void {
    $element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }

  private detectScroll() {
    this.showScrollUpButton = window.scrollY > 600 ? true : false;
  }
}
