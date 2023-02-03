import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
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

  public getProjects(): Observable<IProjectData[]> {
    return this.httpClient
      .get<IStrapiRequest>(environment.apiUrl + this.endPoints.projects)
      .pipe(map((projects: IStrapiRequest) => projects.data));
  }

  public getSelectedProject(id: number): Observable<IProjectData> {
    return this.httpClient
      .get<IStrapiRequest>(environment.apiUrl + this.endPoints.projects + `/${id}`)
      .pipe(map((project: IStrapiRequest) => project.data));
  }

  public createProject(project: IProjectData): any {
    return this.httpClient.post(environment.apiUrl + this.endPoints.projects, project);
  }
}
