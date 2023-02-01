import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from 'src/environments/environment';
import { employeeReducer, IEmployeeState } from './employee.reducers';
import { IProjectState, projectsReducer } from './project.reducers';

export interface IState {
  employee: IEmployeeState;
  project: IProjectState;
}

export const reducers: ActionReducerMap<IState> = {
  employee: employeeReducer,
  project: projectsReducer,
};

export const metaReducers: MetaReducer<IState>[] = !environment.production ? [] : [];
