import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadProjects, loadSelectedProject } from 'src/app/ngrx/actions/project.actions';
import { projectDataSelector, projectSelector } from 'src/app/ngrx/selectors/project.selectors';
import { PROJECTS_FIELDNAMES } from 'src/app/shared/consts/field-names.consts';
import { PROJECT_INFO_PATH } from 'src/app/shared/consts/routing-paths.consts';
import { IProjectData, IProjectRequest } from 'src/app/shared/interfaces/project.interface';
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
    this.store.dispatch(loadProjects());
    this.projects = this.store.select(projectDataSelector);
  }

  public navigateToProjectInfoById(id: number): void {
    this.store.dispatch(loadSelectedProject({ projectId: id }));

    this.router.navigateByUrl(this.router.url + PROJECT_INFO_PATH.fullPath + '/' + id);
  }
}
