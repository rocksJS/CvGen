import { createReducer, on } from '@ngrx/store';
import { IStrapiRequest } from 'src/app/shared/interfaces/request.interface';
import { loadProjectsSuccess, loadSelectedProjectSuccess } from '../actions/project.actions';

export interface IProjectState {
  projects: IStrapiRequest;
  selectedProject: IStrapiRequest;
}

const initialState: IProjectState = {
  projects: {
    data: [],
    meta: {},
  },
  selectedProject: {
    data: {},
    meta: {},
  },
};

export const projectsReducer = createReducer(
  initialState,
  on(loadProjectsSuccess, (state, { projects }) => ({
    ...state,
    projects: projects,
  })),
  on(loadSelectedProjectSuccess, (state, { project }) => ({
    ...state,
    selectedProject: project,
  }))
  // on(createProjectSuccess, (state, { project }) => ({
  //   ...state,
  //   projects: {
  //     data: [...state.projects.data],
  //     meta: { ...state.projects.meta },
  //   },
  // }))
);
