import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IStrapiRequest } from '../../interfaces/request.interface';

@Injectable({
  providedIn: 'root',
})
export class ProjectsApiService {
  private endPoints = {
    projects: '/api/projects',
  };

  constructor(private http: HttpClient) {}

  public getProjects(): Observable<IStrapiRequest> {
    return this.http.get<IStrapiRequest>(environment.apiUrl + this.endPoints.projects);
  }

  public getSelectedProject(id: number): Observable<IStrapiRequest> {
    return this.http.get<IStrapiRequest>(environment.apiUrl + this.endPoints.projects + `/${id}`);
  }

  public createProject(project: IStrapiRequest): Observable<IStrapiRequest> {
    return this.http.post<IStrapiRequest>(environment.apiUrl + this.endPoints.projects, project);
  }

  public updateProject(project: IStrapiRequest): Observable<IStrapiRequest> {
    return this.http.put<IStrapiRequest>(environment.apiUrl + this.endPoints.projects + `/${project.data.id}`, project);
  }
}
