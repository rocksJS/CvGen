import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadSelectedProject, updateProject } from 'src/app/ngrx/actions/project.actions';
import { selectedProjectSelector } from 'src/app/ngrx/selectors/project.selectors';
import { ProjectsFormComponent } from 'src/app/shared/components/forms/projects-form/projects-form.component';
import { PROJECTS_PATH } from 'src/app/shared/consts/routing-paths.consts';
import { IProjectRequest } from 'src/app/shared/interfaces/project.interface';

@Component({
  selector: 'cvg-project-info',
  templateUrl: './project-info.component.html',
  styleUrls: ['./project-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectInfoComponent implements OnInit {
  @ViewChild(ProjectsFormComponent, { static: false })
  private projectsFormComponent: ProjectsFormComponent;

  public selectedByIdProject: Observable<IProjectRequest> | null;

  public projectsPath = PROJECTS_PATH.fullPath;

  public selectedProjectId = this.route.snapshot.params['projectId'];

  constructor(private fb: FormBuilder, private store: Store, private cdR: ChangeDetectorRef, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.store.dispatch(loadSelectedProject({ projectId: this.selectedProjectId }));
    this.selectedByIdProject = this.store.select(selectedProjectSelector);
  }

  public saveProjectChanges(): void {
    if (this.projectsFormComponent.formGroup.valid) {
      const formValue = {
        data: {
          ...this.projectsFormComponent.formGroup.getRawValue(),
          id: this.selectedProjectId,
        },
      };
      this.store.dispatch(updateProject({ project: formValue }));
    }
  }
}
