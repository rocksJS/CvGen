import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'cvg-employee-tabs',
  templateUrl: './employee-tabs.component.html',
  styleUrls: ['./employee-tabs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeeTabsComponent implements OnInit {
  public employeeForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.employeeForm = this.fb.group({
      generalForm: new FormControl('', []),
      skillsForm: new FormControl('', []),
      languagesForm: new FormControl('', []),
      virtualCvsForm: new FormControl('', []),
    });
  }
}
