import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { ICredentials } from 'src/app/shared/interfaces/credential.interface';
import { AuthApiService } from 'src/app/shared/services/api/auth.api.service';
import { login, loginFailure, loginSuccess } from '../actions/auth.actions';

@Injectable()
export class AuthEffects {
  constructor(private actions$: Actions, private authApiService: AuthApiService) {}

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(login),
      switchMap((action) => {
        return this.authApiService.login(action.credentials).pipe(
          map((credentials: ICredentials) => {
            return loginSuccess({ credentials });
          }),
          catchError((error) => of(loginFailure({ error })))
        );
      })
    )
  );
}
