import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from 'src/environments/environment';
import { employeeReducer, IEmployeeState } from './employee.reducers';
import { ILanguageState, languageReducer } from './language.reducers';
import { IPositionState, positionReducer } from './position.actions';
import { IProjectState, projectsReducer } from './project.reducers';
import { ISkillState, skillReducer } from './skill.reducers';

export interface IState {
  employee: IEmployeeState;
  project: IProjectState;
  position: IPositionState;
  skill: ISkillState;
  language: ILanguageState;
}

export const reducers: ActionReducerMap<IState> = {
  employee: employeeReducer,
  project: projectsReducer,
  position: positionReducer,
  skill: skillReducer,
  language: languageReducer,
};

export const metaReducers: MetaReducer<IState>[] = !environment.production ? [] : [];
