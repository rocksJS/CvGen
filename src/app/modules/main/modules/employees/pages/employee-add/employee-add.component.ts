import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'cvg-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeeAddComponent {}
