import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, filter, map, of, switchMap, take } from 'rxjs';
import { IProjectData } from 'src/app/shared/interfaces/project.interface';
import { IStrapiRequest } from 'src/app/shared/interfaces/request.interface';
import { ProjectsApiService } from 'src/app/shared/services/api/projects.api.service';
import { loadProjects, loadProjectsFailure, loadProjectsSuccess } from '../actions/project.actions';

@Injectable()
export class ProjectEffects {
  constructor(private actions$: Actions, private projectsApiService: ProjectsApiService) {}

  loadEmployees$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadProjects),
      switchMap(() =>
        this.projectsApiService.getProjects().pipe(
          take(1),
          filter((projects) => !!projects.length),
          map((projects: IProjectData[]) => {
            return loadProjectsSuccess({ projects });
          }),
          catchError((error) => of(loadProjectsFailure({ error })))
        )
      )
    )
  );
}
