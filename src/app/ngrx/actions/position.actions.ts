import { createAction, props } from '@ngrx/store';
import { IPositionData } from 'src/app/shared/interfaces/positions.interface';

export const loadPositions = createAction('[POSITIONS] Load Positions');

export const loadPositionsSuccess = createAction('[POSITIONS] Load Positions Success', props<{ positions: IPositionData[] }>());

export const loadPositionsFailure = createAction('[POSITIONS] Load Positions Failure', props<{ error: string }>());
