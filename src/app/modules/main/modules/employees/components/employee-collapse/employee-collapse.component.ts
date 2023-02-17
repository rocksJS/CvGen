import { ChangeDetectionStrategy, Component, OnChanges, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, NG_VALIDATORS, NG_VALUE_ACCESSOR, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { projectDataSelector, projectSelector } from 'src/app/ngrx/selectors/project.selectors';
import { BaseControl } from 'src/app/shared/classes/base-control';
import { BaseForm } from 'src/app/shared/classes/base-form';
import { IProjectData, IProjectRequest } from 'src/app/shared/interfaces/project.interface';

@Component({
  selector: 'cvg-employee-collapse',
  templateUrl: './employee-collapse.component.html',
  styleUrls: ['./employee-collapse.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: NG_VALUE_ACCESSOR, useExisting: EmployeeCollapseComponent, multi: true },
    {
      provide: NG_VALIDATORS,
      useExisting: EmployeeCollapseComponent,
      multi: true,
    },
  ],
})
export class EmployeeCollapseComponent extends BaseForm implements OnInit {
  public projects = this.store.select(projectDataSelector);

  public selectedProjects: IProjectRequest[] = [];

  formGroup = new FormGroup({
    projects: new FormControl([]),
  });

  constructor(private fb: FormBuilder, private store: Store) {
    super();
  }

  ngOnInit(): void {
    this.formGroup.get('projects')?.valueChanges.subscribe((selectedProjects) => (this.selectedProjects = selectedProjects ?? []));
  }
}
