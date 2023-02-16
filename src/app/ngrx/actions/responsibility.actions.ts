import { createAction, props } from '@ngrx/store';
import { IStrapiRequest } from 'src/app/shared/interfaces/request.interface';

export const loadResponsibilities = createAction('[RESPONSIBILITIES] Load Responsibilities ');

export const loadResponsibilitiesSuccess = createAction(
  '[RESPONSIBILITIES] Load Responsibilities  Success',
  props<{ responsibilities: IStrapiRequest }>()
);

export const loadResponsibilitiesFailure = createAction('[RESPONSIBILITIES] Load Responsibilities  Failure', props<{ error: string }>());
