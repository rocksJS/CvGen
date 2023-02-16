import { createReducer, on } from '@ngrx/store';
import { IStrapiRequest } from 'src/app/shared/interfaces/request.interface';
import { loadPositionsSuccess } from '../actions/position.actions';

export interface IPositionState {
  positions: IStrapiRequest;
}

const initialState: IPositionState = {
  positions: {
    data: [],
    meta: {},
  },
};

export const positionReducer = createReducer(
  initialState,
  on(loadPositionsSuccess, (state, { positions }) => ({
    ...state,
    positions: positions,
  }))
);
