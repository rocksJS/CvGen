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

  constructor(private http: HttpClient) {}

  public getEmployees(): Observable<IStrapiRequest> {
    return this.http.get<IStrapiRequest>(environment.apiUrl + this.endPoints.employees);
  }

  public getSelectedEmployee(id: number): Observable<IStrapiRequest> {
    return this.http.get<IStrapiRequest>(environment.apiUrl + this.endPoints.employees + `/${id}`);

    // localhost:1337/api/employees/1?populate=cv - получить эмплоя + его сивихи (real cv aka Cv field)
  }
}
