import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule, Validators } from '@angular/forms';
import { format } from 'date-fns';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { BaseForm } from 'src/app/shared/classes/base-form';

import { IProjectData, IProjectRequest } from 'src/app/shared/interfaces/project.interface';
import { DatePickerControlComponent } from '../../date-picker-control/date-picker-control.component';
import { InputControlComponent } from '../../input-control/input-control.component';
import { TextAreaControlComponent } from '../../text-area-control/text-area-control.component';
@Component({
  selector: 'cvg-projects-form',
  standalone: true,
  imports: [
    CommonModule,
    DatePickerControlComponent,
    InputControlComponent,
    FormsModule,
    ReactiveFormsModule,
    TextAreaControlComponent,
    NzButtonModule,
  ],
  templateUrl: './projects-form.component.html',
  styleUrls: ['./projects-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: ProjectsFormComponent,
      multi: true,
    },
    {
      provide: Validators,
      useExisting: ProjectsFormComponent,
      multi: true,
    },
  ],
})
export class ProjectsFormComponent extends BaseForm implements OnInit, OnChanges {
  public formGroup: FormGroup<any>;

  @Input() public selectedProject: IProjectRequest | null;

  @Input() public isEdit: boolean;

  @Output() public formValueEvent = new EventEmitter<IProjectData>();

  public todayDate = format(Date.now(), 'dd.MM.yyyy');

  constructor(private fb: FormBuilder) {
    super();
  }

  ngOnInit() {
    this.formGroup = this.fb.group({
      name: new FormControl('', [Validators.required]),
      from: new FormControl('', [Validators.required]),
      to: new FormControl('', [Validators.required]),

      domain: new FormControl('', [Validators.required]),
      internalName: new FormControl('', [Validators.required]),

      teamSize: new FormControl(null, [Validators.required, Validators.pattern(/^\d+$/)]),
      description: new FormControl('', []),
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.isEdit && this.selectedProject && this.formGroup) {
      const projectData = changes['selectedProject'].currentValue.attributes;

      Object.keys(this.formGroup.controls).forEach((controlName) =>
        this.formGroup.patchValue({ [controlName]: projectData?.[controlName] })
      );
    }
  }
}
