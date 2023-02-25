import { routerReducer, RouterReducerState } from '@ngrx/router-store';
import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from 'src/environments/environment';
import { employeeReducer, IEmployeeState } from './employee.reducers';
import { ILanguageState, languageReducer } from './language.reducers';
import { IPositionState, positionReducer } from './position.reducers';
import { IProjectState, projectsReducer } from './project.reducers';
import { IResponsibilityState, responsibilityReducer } from './responsibility.reducers';
import { ISkillState, skillReducer } from './skill.reducers';

export interface IState {
  router: RouterReducerState;
  employee: IEmployeeState;
  project: IProjectState;
  position: IPositionState;
  skill: ISkillState;
  language: ILanguageState;
  responsibility: IResponsibilityState;
}

export const reducers: ActionReducerMap<IState> = {
  router: routerReducer,
  employee: employeeReducer,
  project: projectsReducer,
  position: positionReducer,
  skill: skillReducer,
  language: languageReducer,
  responsibility: responsibilityReducer,
};

export const metaReducers: MetaReducer<IState>[] = !environment.production ? [] : [];
