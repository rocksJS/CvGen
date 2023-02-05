import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { createProject } from 'src/app/ngrx/actions/project.actions';
import { ProjectsFormComponent } from 'src/app/shared/components/forms/projects-form/projects-form.component';
import { PROJECTS_PATH } from 'src/app/shared/consts/routing-paths.consts';
import { IStrapiRequest } from 'src/app/shared/interfaces/request.interface';
import { ProjectsApiService } from 'src/app/shared/services/api/projects.api.service';
import * as _ from 'lodash';
import { Router } from '@angular/router';
@Component({
  selector: 'cvg-project-add',
  templateUrl: './project-add.component.html',
  styleUrls: ['./project-add.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectAddComponent {
  @ViewChild(ProjectsFormComponent, { static: false })
  private projectsFormComponent: ProjectsFormComponent;

  public projectsPath = PROJECTS_PATH.fullPath;

  constructor(
    private projectsApiService: ProjectsApiService,
    private store: Store,
    private cdR: ChangeDetectorRef,
    private router: Router
  ) {}

  public addProject() {
    if (this.projectsFormComponent.projectForm.valid) {
      const formValue = {
        data: this.projectsFormComponent.projectForm.getRawValue(),
      };
      this.store.dispatch(createProject({ project: formValue }));
      this.router.navigateByUrl(PROJECTS_PATH.fullPath);
    }
  }
}
