import { Component, OnInit } from '@angular/core';
import { Projects } from '../../../core/interfaces/projects';
import { ProjectsService } from '../../../core/services/projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  public projectsList: Projects[] = [];
  public showImagePreview: boolean = false;
  public previewImagePath: string = '';
  responsiveOptions;

  constructor(private projectsService: ProjectsService) {
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

  ngOnInit(): void {
    this.projectsService.getProjects().subscribe((projectsList) => {
      this.projectsList = projectsList;
    });
  }

  public showPreview(backdrop_path: any) {
    this.previewImagePath = backdrop_path;
    this.showImagePreview = true;
  }
}
