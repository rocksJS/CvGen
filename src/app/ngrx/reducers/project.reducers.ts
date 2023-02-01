import { createReducer, on } from '@ngrx/store';
import { IProjectData } from 'src/app/shared/interfaces/project.interface';
import { loadProjectsSuccess } from '../actions/project.actions';

export interface IProjectState {
  projects: IProjectData[];
}

const initialState: IProjectState = {
  projects: [],
};

export const projectsReducer = createReducer(
  initialState,
  on(loadProjectsSuccess, (state, { projects }) => ({
    ...state,
    projects: projects,
  }))
);
