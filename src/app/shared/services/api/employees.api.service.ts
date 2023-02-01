import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { IEmployee } from '../../interfaces/employee.interface';

@Injectable({ providedIn: 'root' })
export class EmployeesApiService {
  private endPoints = {
    employees: '/api/users',
  };

  constructor(private httpClient: HttpClient) {}

  public getEmployees(): Observable<IEmployee[]> {
    return this.httpClient.get<IEmployee[]>(environment.apiUrl + this.endPoints.employees);
  }
}
