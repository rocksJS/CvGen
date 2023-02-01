import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IProjectData, IProjectRequest } from '../../interfaces/project.interface';

@Injectable({ providedIn: 'root' })
export class ProjectsApiService {
  private endPoints = {
    projects: '/api/projects',
  };

  constructor(private httpClient: HttpClient) {}

  public getProjects(): Observable<any> {
    return this.httpClient.get<any>(environment.apiUrl + this.endPoints.projects);
  }
}
