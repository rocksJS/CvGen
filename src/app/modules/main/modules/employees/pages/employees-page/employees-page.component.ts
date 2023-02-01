import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadEmployees } from 'src/app/ngrx/actions/employee.actions';
import { employeeSelector } from 'src/app/ngrx/selectors/employee.selectors';
import { EMPLOYEES_FIELDNAMES } from 'src/app/shared/consts/field-names.consts';
import { ADD_PATH, EMPLOYEE_PROFILE_PATH } from 'src/app/shared/consts/routing-paths.consts';
import { IEmployee } from 'src/app/shared/interfaces/employee.interface';

@Component({
  selector: 'cvg-employees-page',
  templateUrl: './employees-page.component.html',
  styleUrls: ['./employees-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeesPageComponent {
  public readonly contextName = 'Employee';

  public readonly employeesFieldNames = EMPLOYEES_FIELDNAMES;

  public employees: Observable<IEmployee[]>;

  constructor(private store: Store, private router: Router) {}

  ngOnInit() {
    this.store.dispatch(loadEmployees());
    this.employees = this.store.select(employeeSelector);
  }

  public navigateToEmployeeInfoById(id: number): void {
    this.router.navigateByUrl(this.router.url + EMPLOYEE_PROFILE_PATH.fullPath + '/' + id);
  }
}
