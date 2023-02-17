import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IResponsibilityState } from '../reducers/responsibility.reducers';

export const responsibilityFeatureSelector = createFeatureSelector<IResponsibilityState>('responsibility');

export const responsibilitySelector = createSelector(
  responsibilityFeatureSelector,
  (state: IResponsibilityState) => state.responsibilities
);

export const responsibilityDataSelector = createSelector(
  responsibilityFeatureSelector,
  (state: IResponsibilityState) => state.responsibilities.data
);
