import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { IStrapiRequest } from 'src/app/shared/interfaces/request.interface';
import { SkillsApiService } from 'src/app/shared/services/api/skills.api.service';
import { loadSkills, loadSkillsFailure, loadSkillsSuccess } from '../actions/skill.actions';

@Injectable()
export class SkillEffects {
  constructor(private actions$: Actions, private skillsApiService: SkillsApiService) {}

  loadSkills$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadSkills),
      switchMap(() =>
        this.skillsApiService.getSkills().pipe(
          map((skills: IStrapiRequest) => {
            return loadSkillsSuccess({ skills });
          }),
          catchError((error) => of(loadSkillsFailure({ error })))
        )
      )
    )
  );
}
