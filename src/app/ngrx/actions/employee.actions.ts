import { createAction, props } from '@ngrx/store';
import { IEmployee } from 'src/app/shared/interfaces/employee.interface';

export const loadEmployees = createAction('[EMPLOYEES] Load Employees');

export const loadEmployeesSuccess = createAction('[EMPLOYEES] Load Employees Success', props<{ employees: IEmployee[] }>());

export const loadEmployeesFailure = createAction('[EMPLOYEES] Load Employees Failure', props<{ error: string }>());
