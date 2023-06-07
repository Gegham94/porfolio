import { Component, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Experience, Languages, Skills } from '../../../core/interfaces/skills';
import { SkillsService } from '../../../core/services/skills.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
  animations: [
    trigger('slideInOutCarrer', [
      state(
        'in',
        style({
          opacity: '1',
          overflowY: 'auto',
          minHeight: '20px',
          maxHeight: '360px',
        })
      ),
      state(
        'out',
        style({
          opacity: '0',
          overflow: 'hidden',
          height: '0px',
        })
      ),
      transition('in <=> out', animate('300ms ease-in-out')),
    ]),
  ],
})
export class ExperienceComponent implements OnInit {
  public experienceView: string = 'out';
  public skillsView: string = 'out';
  public languagesView: string = 'out';
  public resumeView: string = 'out';

  public isExperienceOpen: boolean = false;
  public isSkillsOpen: boolean = false;
  public isLanguagesOpen: boolean = false;
  public isResumeOpen: boolean = false;

  public experienceList: Experience[] = [];
  public skillsList: Skills[] = [];
  public languagesList: Languages[] = [];

  constructor(private skillsService: SkillsService) {}

  public ngOnInit(): void { 
    this.skillsService.getExperience().subscribe((experienceList) => {
      this.experienceList = experienceList;
    });
    this.skillsService.getSkills().subscribe((skillsList) => {
      this.skillsList = skillsList;
    });
    this.skillsService.getLanguages().subscribe((languagesList) => {
      this.languagesList = languagesList;
    });
  }

  public showHideSkills(item: string) {
    switch (item) {
      case 'experience':
        this.isSkillsOpen = false;
        this.skillsView = 'out';
        this.isLanguagesOpen = false;
        this.languagesView = 'out';
        this.isResumeOpen = false;
        this.resumeView = 'out';
        this.isExperienceOpen = !this.isExperienceOpen;
        this.experienceView = this.isExperienceOpen ? 'in' : 'out';
        break;
      case 'skills':
        this.isExperienceOpen = false;
        this.experienceView = 'out';
        this.isLanguagesOpen = false;
        this.languagesView = 'out';
        this.isResumeOpen = false;
        this.resumeView = 'out';
        this.isSkillsOpen = !this.isSkillsOpen;
        this.skillsView = this.isSkillsOpen ? 'in' : 'out';
        break;
      case 'languages':
        this.isSkillsOpen = false;
        this.skillsView = 'out';
        this.isExperienceOpen = false;
        this.experienceView = 'out';
        this.isResumeOpen = false;
        this.resumeView = 'out';
        this.isLanguagesOpen = !this.isLanguagesOpen;
        this.languagesView = this.isLanguagesOpen ? 'in' : 'out';
        break;
      case 'resume':
        this.isSkillsOpen = false;
        this.skillsView = 'out';
        this.isExperienceOpen = false;
        this.experienceView = 'out';
        this.isLanguagesOpen = false;
        this.languagesView = 'out';
        this.isResumeOpen = !this.isResumeOpen;
        this.resumeView = this.isResumeOpen ? 'in' : 'out';
        break;
    }
  }
}
