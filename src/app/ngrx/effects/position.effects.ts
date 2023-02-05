import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { switchMap, take, filter, map, catchError, of } from 'rxjs';
import { IPositionData } from 'src/app/shared/interfaces/positions.interface';
import { PositionsApiService } from 'src/app/shared/services/api/positions.api.service';
import { loadPositions, loadPositionsFailure, loadPositionsSuccess } from '../actions/position.actions';

@Injectable()
export class PositionEffects {
  constructor(private actions$: Actions, private positiosApiService: PositionsApiService) {}

  loadPositions$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadPositions),
      switchMap(() =>
        this.positiosApiService.getPositions().pipe(
          take(1),
          filter((positions) => !!positions.length),
          map((positions: IPositionData[]) => {
            return loadPositionsSuccess({ positions });
          }),
          catchError((error) => of(loadPositionsFailure({ error })))
        )
      )
    )
  );
}
