import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { ProjectsFormComponent } from 'src/app/shared/components/forms/projects-form/projects-form.component';
import { PROJECTS_PATH } from 'src/app/shared/consts/routing-paths.consts';

import { IProjectData } from 'src/app/shared/interfaces/project.interface';
import { ProjectsApiService } from 'src/app/shared/services/api/projects.api.service';

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

  constructor(private projectsApiService: ProjectsApiService, private store: Store, private cdR: ChangeDetectorRef) {}

  public addProject(formValue: IProjectData) {
    // this.store.dispatch(createProject({ project: { data: formValue } }));
    this.projectsApiService.createProject({ data: formValue }).subscribe();
    console.log(formValue, 'emitted and on backend');
  }

  public formSubmit() {
    this.projectsFormComponent.emitFormValue();
  }
}
