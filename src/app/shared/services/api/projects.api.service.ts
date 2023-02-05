import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IProjectData } from '../../interfaces/project.interface';
import { IStrapiRequest } from '../../interfaces/request.interface';

@Injectable({
  providedIn: 'root',
})
export class ProjectsApiService {
  private endPoints = {
    projects: '/api/projects',
    project: '/api/project',
  };

  constructor(private httpClient: HttpClient) {}

  public getProjects(): Observable<IStrapiRequest> {
    return this.httpClient.get<IStrapiRequest>(environment.apiUrl + this.endPoints.projects);
  }

  public getSelectedProject(id: number): Observable<IStrapiRequest> {
    return this.httpClient.get<IStrapiRequest>(environment.apiUrl + this.endPoints.projects + `/${id}`);
  }

  public createProject(project: IStrapiRequest): Observable<IStrapiRequest> {
    return this.httpClient.post<IStrapiRequest>(environment.apiUrl + this.endPoints.projects, project);
  }
}
