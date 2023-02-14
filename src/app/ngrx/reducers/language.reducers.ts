import { createReducer, on } from '@ngrx/store';
import { IStrapiRequest } from 'src/app/shared/interfaces/request.interface';
import { loadLanguagesSuccess } from '../actions/language.actions';

export interface ILanguageState {
  languages: IStrapiRequest;
}

const initialState: ILanguageState = {
  languages: {
    data: [],
    meta: {},
  },
};

export const languageReducer = createReducer(
  initialState,
  on(loadLanguagesSuccess, (state, { languages }) => ({
    ...state,
    languages: languages,
  }))
);
