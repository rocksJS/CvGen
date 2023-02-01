import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'cvg-employee-profile',
  templateUrl: './employee-profile.component.html',
  styleUrls: ['./employee-profile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeeProfileComponent {}
