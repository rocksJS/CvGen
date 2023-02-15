import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ILanguageState } from '../reducers/language.reducers';

export const languagesFeatureSelector = createFeatureSelector<ILanguageState>('language');

export const languagesSelector = createSelector(languagesFeatureSelector, (state: ILanguageState) => state.languages);

export const languagesDataSelector = createSelector(languagesFeatureSelector, (state: ILanguageState) => state.languages.data);
