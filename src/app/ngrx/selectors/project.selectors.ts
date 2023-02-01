import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IProjectState } from '../reducers/project.reducers';

export const projectFeatureSelector = createFeatureSelector<IProjectState>('project');

export const projectSelector = createSelector(projectFeatureSelector, (state: IProjectState) => state.projects);
