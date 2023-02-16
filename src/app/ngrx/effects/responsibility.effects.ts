import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { switchMap, map, catchError, of } from 'rxjs';
import { IStrapiRequest } from 'src/app/shared/interfaces/request.interface';
import { ResponsibilitiesApiService } from 'src/app/shared/services/api/responsibilities.api.service';
import { loadResponsibilities, loadResponsibilitiesFailure, loadResponsibilitiesSuccess } from '../actions/responsibility.actions';

@Injectable()
export class ResponsibilityEffects {
  constructor(private actions$: Actions, private responsibilitiesApiService: ResponsibilitiesApiService) {}

  loadResponsibilities$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadResponsibilities),
      switchMap(() =>
        this.responsibilitiesApiService.getResponsibilities().pipe(
          map((responsibilities: IStrapiRequest) => {
            return loadResponsibilitiesSuccess({ responsibilities });
          }),
          catchError((error) => of(loadResponsibilitiesFailure({ error })))
        )
      )
    )
  );
}
