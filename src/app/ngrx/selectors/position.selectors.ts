import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IPositionState } from '../reducers/position.reducers';

export const positionFeatureSelector = createFeatureSelector<IPositionState>('position');

export const positionSelector = createSelector(positionFeatureSelector, (state: IPositionState) => state.positions);

export const positionDataSelector = createSelector(positionFeatureSelector, (state: IPositionState) => state.positions.data);
