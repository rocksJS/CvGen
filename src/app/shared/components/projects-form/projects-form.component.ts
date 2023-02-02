import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { DatePickerControlComponent } from '../date-picker-control/date-picker-control.component';
import { InputControlComponent } from '../input-control/input-control.component';
import { format, compareAsc } from 'date-fns';
import { PositionsApiService } from '../../services/api/positions-api.service';
import { loadPositions } from 'src/app/ngrx/actions/position.actions';
import { positionSelector } from 'src/app/ngrx/selectors/position.selectors';

@Component({
  selector: 'cvg-projects-form',
  standalone: true,
  imports: [CommonModule, DatePickerControlComponent, InputControlComponent, FormsModule, ReactiveFormsModule],
  templateUrl: './projects-form.component.html',
  styleUrls: ['./projects-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsFormComponent implements OnInit {
  @Input() public projects: any;

  public todayDate = format(Date.now(), 'dd.MM.yyyy');

  public projectsForm: FormGroup;

  public testPositions: any;

  constructor(private fb: FormBuilder, private store: Store, private positionsApiService: PositionsApiService) {}

  ngOnInit() {
    this.projectsForm = this.fb.group({
      name: new FormControl('', [Validators.required]),
      from: new FormControl('', [Validators.required]),
      to: new FormControl('', []),

      teamSize: new FormControl('', []),
      position: new FormControl('', []),
      roles: new FormControl('', []),

      domain: new FormControl('', []),
      internalName: new FormControl('', []),
      description: new FormControl('', []),
    });

    this.store.dispatch(loadPositions());
    this.store.select(positionSelector).subscribe((positions) => (this.testPositions = positions));
  }

  testConsole() {
    // this.projectsForm.controls['position'].patchValue('dawd');
    console.log(this.projectsForm.getRawValue());
  }
}
