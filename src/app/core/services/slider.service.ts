import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

import { Slider } from '../interfaces/slider';

@Injectable({
  providedIn: 'root'
})
export class SliderService {
  API_URL = environment.API_URL;

  constructor(private http: HttpClient) {}

  getSlider() {
    return this.http.get<Slider[]>(`${this.API_URL}/slider.data.json`);
  }
}
