import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Store } from '@ngrx/store';
import { positionDataSelector } from 'src/app/ngrx/selectors/position.selectors';
import { responsibilityDataSelector } from 'src/app/ngrx/selectors/responsibility.selectors';
import { BaseForm } from 'src/app/shared/classes/base-form';
import { ExtractNamesPipe } from 'src/app/shared/pipes/extract-name.pipe';
import { InputControlComponent } from '../../input-control/input-control.component';
import { MultiSelectControlComponent } from '../../multi-select-control/multi-select-control.component';
import { SelectControlComponent } from '../../select-control/select-control.component';

@Component({
  selector: 'cvg-general-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    InputControlComponent,
    SelectControlComponent,
    ExtractNamesPipe,
    MultiSelectControlComponent,
  ],
  templateUrl: './general-form.component.html',
  styleUrls: ['./general-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: GeneralFormComponent,
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: GeneralFormComponent,
      multi: true,
    },
  ],
})
export class GeneralFormComponent extends BaseForm {
  formGroup = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    education: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    position: new FormControl('', [Validators.required]),
    responsibilities: new FormControl([], [Validators.required]),
  });

  public positions = this.store.select(positionDataSelector);

  public responsibilities = this.store.select(responsibilityDataSelector);

  constructor(private fb: FormBuilder, private store: Store) {
    super();
  }
}
