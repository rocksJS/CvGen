import { createAction, props } from '@ngrx/store';
import { IProjectData } from 'src/app/shared/interfaces/project.interface';

export const loadProjects = createAction('[PROJECTS] Load Projects');

export const loadProjectsSuccess = createAction('[PROJECTS] Load Projects Success', props<{ projects: IProjectData[] }>());

export const loadProjectsFailure = createAction('[PROJECTS] Load Projects Failure', props<{ error: string }>());

//

export const loadSelectedProject = createAction('[PROJECTS] Load Selected Project', props<{ project: IProjectData }>());

export const loadSelectedProjectSuccess = createAction('[PROJECTS] Load Selected Project Success', props<{ project: IProjectData }>());

export const loadSelectedProjectFailure = createAction('[PROJECTS] Load Selected Project Failure', props<{ project: IProjectData }>());
