import { createReducer, on } from '@ngrx/store';
import { IProjectData } from 'src/app/shared/interfaces/project.interface';
import { IStrapiRequest } from 'src/app/shared/interfaces/request.interface';
import { createProjectSuccess, loadProjectsSuccess, loadSelectedProjectSuccess, updateProjectSuccess } from '../actions/project.actions';

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
  })),
  on(createProjectSuccess, (state, { project }) => ({
    ...state,
    projects: {
      data: [...state.projects.data, project.data],
      meta: state.projects.meta,
    },
  })),
  on(updateProjectSuccess, (state, { project }) => ({
    ...state,
    projects: {
      data: state.projects.data.map((item: IProjectData) => (item.id === project.data.id ? project.data : item)),
      meta: state.projects.meta,
    },
  }))
);
