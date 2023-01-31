import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from 'src/environments/environment';
import { employeeReducer, IEmployeeState } from './employee.reducers';

export interface IState {
  employee: IEmployeeState;
}

export const reducers: ActionReducerMap<IState> = {
  employee: employeeReducer,
};

export const metaReducers: MetaReducer<IState>[] = !environment.production ? [] : [];
