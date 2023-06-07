import { Component, OnInit } from '@angular/core';
import { SliderService } from '../../core/services/slider.service';
import { VideoPlayerService } from '../../core/services/video-player.service';
import { ProfileService } from '../../core/services/profile.service';
import { Slider } from '../../core/interfaces/slider';
import { VideoPlayer } from '../../core/interfaces/video-player';
import { Profile, ProfileImages } from '../../core/interfaces/profile';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  persones: Slider[] = [];
  videos: VideoPlayer[] = [];
  galleryImages: ProfileImages[] = [];
  armyImages: ProfileImages[] = [];
  profile: Profile = {
    name: '',
    profession: '',
    backdrop_path: ''
  };

  constructor(
    private sliderService: SliderService,
    private videoPlayerService: VideoPlayerService,
    private profileService: ProfileService
  ) {}

  ngOnInit(): void {
    this.sliderService.getSlider().subscribe((sliders) => {
      this.persones = sliders;
    });
    this.videoPlayerService.getVideos().subscribe((videos) => {
      this.videos = videos;
    });
    this.profileService.getProfile().subscribe((profile) => {
      this.profile = profile;
    });
    this.profileService.getGalleryImages().subscribe((galleryImages) => {
      this.galleryImages = galleryImages;
    });
    this.profileService.getArmyImages().subscribe((armyImages) => {
      this.armyImages = armyImages;
    });
  }
}
