import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IPositionData } from '../../interfaces/positions.interface';
import { IStrapiRequest } from '../../interfaces/request.interface';

@Injectable({
  providedIn: 'root',
})
export class ResponsibilitiesApiService {
  private endPoints = {
    responsibilities: '/api/responsibilities',
  };

  constructor(private http: HttpClient) {}

  public getResponsibilities(): Observable<IStrapiRequest> {
    return this.http.get<IStrapiRequest>(environment.apiUrl + this.endPoints.responsibilities);
  }
}
