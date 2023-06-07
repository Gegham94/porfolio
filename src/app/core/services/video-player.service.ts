import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

import { VideoPlayer } from '../interfaces/video-player';

@Injectable({
  providedIn: 'root'
})
export class VideoPlayerService {
  API_URL = environment.API_URL;

  constructor(private http: HttpClient) {}

  getVideos() {
    return this.http.get<VideoPlayer[]>(`${this.API_URL}/video-player.data.json`);
  }
}
