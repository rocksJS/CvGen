import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { projectDataSelector } from 'src/app/ngrx/selectors/project.selectors';
import { PROJECTS_FIELDNAMES } from 'src/app/shared/consts/field-names.consts';
import { PROJECT_INFO_PATH } from 'src/app/shared/consts/routing-paths.consts';
import { IProjectRequest } from 'src/app/shared/interfaces/project.interface';
import { ProjectsApiService } from 'src/app/shared/services/api/projects.api.service';

@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.scss'],
})
export class ProjectsPageComponent implements OnInit {
  public readonly contextName = 'Project';

  public readonly projectsFieldNames = PROJECTS_FIELDNAMES;

  public projects: Observable<IProjectRequest[]>;

  constructor(private store: Store, private router: Router, private projectApiService: ProjectsApiService) {}

  ngOnInit() {
    this.projects = this.store.select(projectDataSelector);
  }

  public navigateToProjectInfoById(id: number): void {
    this.router.navigateByUrl(this.router.url + PROJECT_INFO_PATH.fullPath + '/' + id);
  }
}
