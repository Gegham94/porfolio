import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

import { Profile } from '../interfaces/profile';
import { ProfileImages } from '../interfaces/profile';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  API_URL = environment.API_URL;

  constructor(private http: HttpClient) {}

  getProfile() {
    return this.http.get<Profile>(`${this.API_URL}/profile.data.json`);
  }
  getGalleryImages() {
    return this.http.get<ProfileImages[]>(`${this.API_URL}/gallery-images.data.json`);
  }
  getArmyImages() {
    return this.http.get<ProfileImages[]>(`${this.API_URL}/army-images.data.json`);
  }
}
