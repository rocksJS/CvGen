import { createReducer, on } from '@ngrx/store';
import { IPositionData } from 'src/app/shared/interfaces/positions.interface';
import { loadPositionsSuccess } from '../actions/position.actions';

export interface IPositionState {
  positions: IPositionData[];
}

const initialState: IPositionState = {
  positions: [],
};

export const positionReducer = createReducer(
  initialState,
  on(loadPositionsSuccess, (state, { positions }) => ({
    ...state,
    positions: positions,
  }))
);
