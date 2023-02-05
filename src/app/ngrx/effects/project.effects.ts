import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap, take } from 'rxjs';
import { IStrapiRequest } from 'src/app/shared/interfaces/request.interface';
import { ProjectsApiService } from 'src/app/shared/services/api/projects.api.service';
import {
  createProject,
  createProjectFailure,
  createProjectSuccess,
  loadProjects,
  loadProjectsFailure,
  loadProjectsSuccess,
  loadSelectedProject,
  loadSelectedProjectSuccess,
} from '../actions/project.actions';

@Injectable()
export class ProjectEffects {
  constructor(private actions$: Actions, private projectsApiService: ProjectsApiService) {}

  loadProjects$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadProjects),
      switchMap(() =>
        this.projectsApiService.getProjects().pipe(
          map((projects: IStrapiRequest) => {
            return loadProjectsSuccess({ projects });
          }),
          catchError((error) => of(loadProjectsFailure({ error })))
        )
      )
    )
  );

  loadSelectedProject$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadSelectedProject),
      switchMap((action) =>
        this.projectsApiService.getSelectedProject(action.projectId).pipe(
          map((project: IStrapiRequest) => {
            return loadSelectedProjectSuccess({ project });
          }),
          catchError((error) => of(loadProjectsFailure({ error })))
        )
      )
    )
  );

  createProject$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createProject),
      switchMap((action) =>
        this.projectsApiService.createProject(action.project).pipe(
          take(1),
          map((project: IStrapiRequest) => {
            return createProjectSuccess({ project });
          }),
          catchError((error) => of(createProjectFailure({ error })))
        )
      )
    )
  );
}
