import { createAction, props } from '@ngrx/store';
import { ICredentials } from 'src/app/shared/interfaces/credential.interface';

export const login = createAction('[LOGIN] Login', props<{ credentials: ICredentials }>());

export const loginSuccess = createAction('[LOGIN] Login Success', props<{ credentials: ICredentials }>());

export const loginFailure = createAction('[LOGIN] Login Failure', props<{ error: string }>());
