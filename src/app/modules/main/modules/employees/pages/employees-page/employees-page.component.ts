import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadEmployees } from 'src/app/ngrx/actions/employee.actions';
import { employeeSelector } from 'src/app/ngrx/selectors/employee.selectors';
import { EMPLOYEES_FIELDNAMES } from 'src/app/shared/consts/field-names.consts';
import { EmployeesApiService } from 'src/app/shared/services/api/employees.service';

@Component({
  selector: 'app-employees-page',
  templateUrl: './employees-page.component.html',
  styleUrls: ['./employees-page.component.scss'],
})
export class EmployeesPageComponent {
  constructor(private http: HttpClient, private employeesApiService: EmployeesApiService, private store: Store) {}

  public employees = this.store.select(employeeSelector);

  public employeeFieldNames = EMPLOYEES_FIELDNAMES;

  ngOnInit() {
    this.store.dispatch(loadEmployees());
  }
}
