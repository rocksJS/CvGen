import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IStrapiRequest } from '../../interfaces/request.interface';

@Injectable({ providedIn: 'root' })
export class EmployeesApiService {
  private endPoints = {
    employees: '/api/employees',
  };

  constructor(private httpClient: HttpClient) {}

  public getEmployees(): Observable<IStrapiRequest> {
    return this.httpClient.get<IStrapiRequest>(environment.apiUrl + this.endPoints.employees);
  }

  public getSelectedEmployee(id: number): Observable<IStrapiRequest> {
    return this.httpClient.get<IStrapiRequest>(environment.apiUrl + this.endPoints.employees + `/${id}`);
  }
}
