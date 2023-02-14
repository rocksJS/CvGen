import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BaseForm } from 'src/app/shared/classes/base-form';

@Component({
  selector: 'cvg-employee-cv',
  templateUrl: './employee-cv.component.html',
  styleUrls: ['./employee-cv.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeeCvComponent extends BaseForm {
  formGroup: FormGroup<any>;
}
