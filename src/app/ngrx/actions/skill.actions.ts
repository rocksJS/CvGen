import { createAction, props } from '@ngrx/store';
import { IStrapiRequest } from 'src/app/shared/interfaces/request.interface';

export const loadSkills = createAction('[SKILLS] Load Skills');

export const loadSkillsSuccess = createAction('[SKILLS] Load Skills Success', props<{ skills: IStrapiRequest }>());

export const loadSkillsFailure = createAction('[SKILLS] Load Skills Failure', props<{ error: string }>());
