import { ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { EMPLOYEES_PATH } from 'src/app/shared/consts/routing-paths.consts';
import { EmployeeTabsComponent } from '../../components/employee-tabs/employee-tabs.component';

@Component({
  selector: 'cvg-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeeAddComponent implements OnInit {
  @ViewChild(EmployeeTabsComponent, { static: false })
  private employeeTabsComponent: EmployeeTabsComponent;

  public employeePath = EMPLOYEES_PATH.fullPath;

  constructor(private store: Store, private router: Router, private fb: FormBuilder) {}
  ngOnInit(): void {
    console.log('x');
  }

  addEmployee() {
    // if (this.employeeTabsComponent.formGroup.valid) {
    //   const formValue = {
    //     data: this.projectsFormComponent.formGroup.getRawValue(),
    //   };
    //   this.store.dispatch(createProject({ project: formValue }));
    //   this.router.navigateByUrl(PROJECTS_PATH.fullPath);
    // }
  }
}
