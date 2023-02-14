import { createReducer, on } from '@ngrx/store';
import { IStrapiRequest } from 'src/app/shared/interfaces/request.interface';
import { loadSkillsSuccess } from '../actions/skill.actions';

export interface ISkillState {
  skills: IStrapiRequest;
}

const initialState: ISkillState = {
  skills: {
    data: [],
    meta: {},
  },
};

export const skillReducer = createReducer(
  initialState,
  on(loadSkillsSuccess, (state, { skills }) => ({
    ...state,
    skills: skills,
  }))
);
