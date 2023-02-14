import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { BaseForm } from 'src/app/shared/classes/base-form';
import { InputControlComponent } from '../../input-control/input-control.component';

@Component({
  selector: 'cvg-general-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule, InputControlComponent],
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
  });

  constructor(private fb: FormBuilder) {
    super();
  }
}
