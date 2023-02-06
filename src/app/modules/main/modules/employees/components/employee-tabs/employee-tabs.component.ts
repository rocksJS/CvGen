import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'cvg-employee-tabs',
  templateUrl: './employee-tabs.component.html',
  styleUrls: ['./employee-tabs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeeTabsComponent {}
