import { createReducer, on } from '@ngrx/store';
import { IStrapiRequest } from 'src/app/shared/interfaces/request.interface';
import { loadPositionsSuccess } from '../actions/position.actions';
import { loadResponsibilitiesSuccess } from '../actions/responsibility.actions';
import { IPositionState } from './position.actions';

export interface IResponsibilityState {
  responsibilities: IStrapiRequest;
}

const initialState: IResponsibilityState = {
  responsibilities: {
    data: [],
    meta: {},
  },
};

export const responsibilityReducer = createReducer(
  initialState,
  on(loadResponsibilitiesSuccess, (state, { responsibilities }) => ({
    ...state,
    responsibilities: responsibilities,
  }))
);
