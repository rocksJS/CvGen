import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IPositionState } from '../reducers/position.actions';

export const positionFeatureSelector = createFeatureSelector<IPositionState>('position');

export const positionSelector = createSelector(positionFeatureSelector, (state: IPositionState) => state.positions);
