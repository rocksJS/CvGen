import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';
import { BaseForm } from 'src/app/shared/classes/base-form';

@Component({
  selector: 'cvg-employee-info',
  templateUrl: './employee-info.component.html',
  styleUrls: ['./employee-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: NG_VALUE_ACCESSOR, useExisting: EmployeeInfoComponent, multi: true },
    {
      provide: NG_VALIDATORS,
      useExisting: EmployeeInfoComponent,
      multi: true,
    },
  ],
})
export class EmployeeInfoComponent extends BaseForm {
  formGroup = new FormGroup({
    generalForm: new FormControl(),
    skillsForm: new FormControl(),
  });

  constructor(private fb: FormBuilder) {
    super();
  }
}
