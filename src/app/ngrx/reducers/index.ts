import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from 'src/environments/environment';
import { employeeReducer, IEmployeeState } from './employee.reducers';
import { IPositionState, positionReducer } from './position.actions';
import { IProjectState, projectsReducer } from './project.reducers';

export interface IState {
  employee: IEmployeeState;
  project: IProjectState;
  position: IPositionState;
}

export const reducers: ActionReducerMap<IState> = {
  employee: employeeReducer,
  project: projectsReducer,
  position: positionReducer,
};

export const metaReducers: MetaReducer<IState>[] = !environment.production ? [] : [];
