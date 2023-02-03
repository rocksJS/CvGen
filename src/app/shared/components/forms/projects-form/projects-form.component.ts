import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { DatePickerControlComponent } from '../../date-picker-control/date-picker-control.component';
import { InputControlComponent } from '../../input-control/input-control.component';
import { format, compareAsc } from 'date-fns';
import { PositionsApiService } from '../../../services/api/positions-api.service';
import { loadPositions } from 'src/app/ngrx/actions/position.actions';
import { positionSelector } from 'src/app/ngrx/selectors/position.selectors';
import { TextAreaControlComponent } from '../../text-area-control/text-area-control.component';
import { projectSelector } from 'src/app/ngrx/selectors/project.selectors';
import { IProjectData } from 'src/app/shared/interfaces/project.interface';
import { ProjectsApiService } from 'src/app/shared/services/api/projects.api.service';

@Component({
  selector: 'cvg-projects-form',
  standalone: true,
  imports: [CommonModule, DatePickerControlComponent, InputControlComponent, FormsModule, ReactiveFormsModule, TextAreaControlComponent],
  templateUrl: './projects-form.component.html',
  styleUrls: ['./projects-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsFormComponent implements OnInit {
  @Input() public projects: any;

  @Input() public isEdit: boolean;

  public todayDate = format(Date.now(), 'dd.MM.yyyy');

  public projectsForm: FormGroup;

  public testProjects: IProjectData[];

  constructor(
    private fb: FormBuilder,
    private store: Store,
    private positionsApiService: PositionsApiService,
    private projectsApiService: ProjectsApiService
  ) {}

  ngOnInit() {
    this.projectsForm = this.fb.group({
      name: new FormControl('', [Validators.required]),
      from: new FormControl('', [Validators.required]),
      to: new FormControl('', [Validators.required]),

      domain: new FormControl('', [Validators.required]),
      internalName: new FormControl('', [Validators.required]),

      teamSize: new FormControl(null, [Validators.required, Validators.pattern(/^\d+$/)]),
      description: new FormControl('', []),
    });

    // if (this.isEdit) {
    // }

    // this.projectsApiService.getSelectedProject(10).subscribe((project: any) => console.log(project));
  }

  testConsole() {
    if (this.projectsForm.valid) {
      this.projectsApiService.createProject(this.projectsForm.getRawValue()).subscribe();
    }
    // this.projectsForm.controls['position'].patchValue('dawd');
    // console.log(this.projectsForm.getRawValue());
    // console.log(this.projectsForm.valid);
  }
}
