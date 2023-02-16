import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IPositionState } from '../reducers/position.actions';
import { IResponsibilityState } from '../reducers/responsibility.reducers';

export const responsibilityFeatureSelector = createFeatureSelector<IResponsibilityState>('position');

export const responsibilitySelector = createSelector(
  responsibilityFeatureSelector,
  (state: IResponsibilityState) => state.responsibilities
);

export const responsibilityDataSelector = createSelector(
  responsibilityFeatureSelector,
  (state: IResponsibilityState) => state.responsibilities.data
);
