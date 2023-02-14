import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { switchMap, map, catchError, of } from 'rxjs';
import { IStrapiRequest } from 'src/app/shared/interfaces/request.interface';
import { LanguageApiService } from 'src/app/shared/services/api/languages.api.service';
import { loadLanguages, loadLanguagesFailure, loadLanguagesSuccess } from '../actions/language.actions';

@Injectable()
export class LanguageEffects {
  constructor(private actions$: Actions, private languagesApiService: LanguageApiService) {}

  loadLanguages$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadLanguages),
      switchMap(() =>
        this.languagesApiService.getLanguages().pipe(
          map((languages: IStrapiRequest) => {
            return loadLanguagesSuccess({ languages });
          }),
          catchError((error) => of(loadLanguagesFailure({ error })))
        )
      )
    )
  );
}
