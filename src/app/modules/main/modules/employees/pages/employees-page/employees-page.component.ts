import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { EMPLOYEES_FIELDNAMES } from 'src/app/shared/consts/field-names.consts';
import { IEmployee } from 'src/app/shared/interfaces/employee.interface';
import { EmployeesApiService } from 'src/app/shared/services/api/employees.service';

@Component({
  selector: 'app-employees-page',
  templateUrl: './employees-page.component.html',
  styleUrls: ['./employees-page.component.scss'],
})
export class EmployeesPageComponent {
  constructor(private http: HttpClient, private employeesApiService: EmployeesApiService) {}

  public employees = this.employeesApiService.getEmployees();

  public employeeFieldNames = EMPLOYEES_FIELDNAMES;

  ngOnInit() {
    this.employeesApiService.getEmployees().subscribe((users) => console.log(users));
  }
}
