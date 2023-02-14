import { createAction, props } from '@ngrx/store';
import { IStrapiRequest } from 'src/app/shared/interfaces/request.interface';

export const loadLanguages = createAction('[LANGUAGES] Load Languages');

export const loadLanguagesSuccess = createAction('[LANGUAGES] Load Languages Success', props<{ languages: IStrapiRequest }>());

export const loadLanguagesFailure = createAction('[LANGUAGES] Load Languages Failure', props<{ error: string }>());
