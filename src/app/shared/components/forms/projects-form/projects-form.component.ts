import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { format } from 'date-fns';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { IProjectData } from 'src/app/shared/interfaces/project.interface';
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
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsFormComponent implements OnInit {
  @Input() public projects: any;

  @Input() public isEdit: boolean;

  @Output() public formValueEvent = new EventEmitter<IProjectData>();

  public todayDate = format(Date.now(), 'dd.MM.yyyy');

  public projectForm: FormGroup;

  public testProjects: IProjectData[];

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.projectForm = this.fb.group({
      name: new FormControl('', [Validators.required]),
      from: new FormControl('', [Validators.required]),
      to: new FormControl('', [Validators.required]),

      domain: new FormControl('', [Validators.required]),
      internalName: new FormControl('', [Validators.required]),

      teamSize: new FormControl(null, [Validators.required, Validators.pattern(/^\d+$/)]),
      description: new FormControl('', []),
    });
  }
}
