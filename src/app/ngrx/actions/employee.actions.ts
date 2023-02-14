import { createAction, props } from '@ngrx/store';
import { IStrapiRequest } from 'src/app/shared/interfaces/request.interface';

export const loadEmployees = createAction('[EMPLOYEES] Load Employees');

export const loadEmployeesSuccess = createAction('[EMPLOYEES] Load Employees Success', props<{ employees: IStrapiRequest }>());

export const loadEmployeesFailure = createAction('[EMPLOYEES] Load Employees Failure', props<{ error: string }>());

//

export const loadSelectedEmployee = createAction('[EMPLOYEE] Load Selected Employee', props<{ employeeId: number }>());

export const loadSelectedEmployeeSuccess = createAction('[EMPLOYEE] Load Selected Employee Success', props<{ employee: IStrapiRequest }>());

export const loadSelectedEmployeeFailure = createAction('[EMPLOYEE] Load Selected Employee Failure', props<{ error: string }>());

//
