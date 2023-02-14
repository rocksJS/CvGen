import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ISkillState } from '../reducers/skill.reducers';

export const skillsFeatureSelector = createFeatureSelector<ISkillState>('skill');

export const skillsSelector = createSelector(skillsFeatureSelector, (state: ISkillState) => state.skills);

export const skillsDataSelector = createSelector(skillsFeatureSelector, (state: ISkillState) => state.skills.data);
