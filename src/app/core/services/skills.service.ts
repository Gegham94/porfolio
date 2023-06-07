import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

import { Experience, Skills, Languages } from '../interfaces/skills';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  API_URL = environment.API_URL;

  constructor(private http: HttpClient) {}

  getExperience() {
    return this.http.get<Experience[]>(`${this.API_URL}/experience.data.json`);
  }
  getSkills() {
    return this.http.get<Skills[]>(`${this.API_URL}/skills.data.json`);
  }
  getLanguages() {
    return this.http.get<Languages[]>(`${this.API_URL}/languages.data.json`);
  }
}
