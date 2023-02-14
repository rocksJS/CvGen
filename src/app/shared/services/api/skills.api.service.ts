import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IStrapiRequest } from '../../interfaces/request.interface';

@Injectable({
  providedIn: 'root',
})
export class SkillsApiService {
  private endPoints = {
    skills: '/api/skills',
  };

  constructor(private http: HttpClient) {}

  public getSkills(): Observable<IStrapiRequest> {
    return this.http.get<IStrapiRequest>(environment.apiUrl + this.endPoints.skills);
  }
}
