import { createAction, props } from '@ngrx/store';
import { IProjectData } from 'src/app/shared/interfaces/project.interface';
import { IStrapiRequest } from 'src/app/shared/interfaces/request.interface';

export const loadProjects = createAction('[PROJECTS] Load Projects');

export const loadProjectsSuccess = createAction('[PROJECTS] Load Projects Success', props<{ projects: IStrapiRequest }>());

export const loadProjectsFailure = createAction('[PROJECTS] Load Projects Failure', props<{ error: string }>());

//

export const loadSelectedProject = createAction('[PROJECTS] Load Selected Project', props<{ projectId: number }>());

export const loadSelectedProjectSuccess = createAction('[PROJECTS] Load Selected Project Success', props<{ project: IStrapiRequest }>());

export const loadSelectedProjectFailure = createAction('[PROJECTS] Load Selected Project Failure', props<{ error: string }>());

//

// export const createProject = createAction('[PROJECTS] Create Project Success', props<{ project: IStrapiRequest }>());

// export const createProjectSuccess = createAction('[PROJECTS] Create Project Success', props<{ project: IStrapiRequest }>());

// export const createProjectFailure = createAction('[PROJECTS] Create Project Failure', props<{ error: string }>());
