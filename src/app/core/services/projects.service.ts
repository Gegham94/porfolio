import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

import { Projects } from '../interfaces/projects';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  API_URL = environment.API_URL;

  constructor(private http: HttpClient) {}

  getProjects() {
    return this.http.get<Projects[]>(`${this.API_URL}/projects.data.json`);
  }
}
