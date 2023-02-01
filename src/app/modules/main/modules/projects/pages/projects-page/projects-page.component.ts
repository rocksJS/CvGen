import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadProjects } from 'src/app/ngrx/actions/project.actions';
import { projectSelector } from 'src/app/ngrx/selectors/project.selectors';
import { PROJECTS_FIELDNAMES } from 'src/app/shared/consts/field-names.consts';
import { PROJECT_INFO_PATH } from 'src/app/shared/consts/routing-paths.consts';
import { IProjectData } from 'src/app/shared/interfaces/project.interface';

@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.scss'],
})
export class ProjectsPageComponent implements OnInit {
  public readonly contextName = 'Project';

  public readonly projectsFieldNames = PROJECTS_FIELDNAMES;

  public projects: Observable<IProjectData[]>;

  constructor(private store: Store, private router: Router) {}

  ngOnInit() {
    this.store.dispatch(loadProjects());
    this.projects = this.store.select(projectSelector);
  }

  public navigateToProjectInfoById(id: number): void {
    this.router.navigateByUrl(this.router.url + PROJECT_INFO_PATH.fullPath + '/' + id);
  }
}
