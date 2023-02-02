import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IPositionData } from '../../interfaces/positions.interface';
import { IStrapiRequest } from '../../interfaces/request.interface';

@Injectable({
  providedIn: 'root',
})
export class PositionsApiService {
  private endPoints = {
    positions: '/api/positions',
  };

  constructor(private http: HttpClient) {}

  public getPositions(): Observable<IPositionData[]> {
    return this.http
      .get<IStrapiRequest>(environment.apiUrl + this.endPoints.positions)
      .pipe(map((projects: IStrapiRequest) => projects.data));
  }
}
