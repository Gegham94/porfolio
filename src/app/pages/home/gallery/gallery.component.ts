import { Component, Input, OnInit } from '@angular/core';
import { Profile, ProfileImages } from '../../../core/interfaces/profile';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit {
  @Input() galleryImages: ProfileImages[] = [];
  @Input() armyImages: ProfileImages[] = [];
  @Input() item: Profile = {
    name: '',
    profession: '',
    backdrop_path: '',
  };
  public showImagePreview: boolean = false;
  public previewImagePath: string = '';
  responsiveOptions;

  constructor() {
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3,
      },
      {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2,
      },
      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1,
      },
    ];
  }

  ngOnInit(): void { }

  public showPreview(backdrop_path: any) {
    this.previewImagePath = backdrop_path;
    this.showImagePreview = true;
  }
}
