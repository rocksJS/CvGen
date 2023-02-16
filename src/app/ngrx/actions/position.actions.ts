import { createAction, props } from '@ngrx/store';
import { IPositionData } from 'src/app/shared/interfaces/positions.interface';
import { IStrapiRequest } from 'src/app/shared/interfaces/request.interface';

export const loadPositions = createAction('[POSITIONS] Load Positions');

export const loadPositionsSuccess = createAction('[POSITIONS] Load Positions Success', props<{ positions: IStrapiRequest }>());

export const loadPositionsFailure = createAction('[POSITIONS] Load Positions Failure', props<{ error: string }>());
