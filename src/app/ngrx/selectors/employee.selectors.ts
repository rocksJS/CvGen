import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IEmployeeState } from '../reducers/employee.reducers';

export const employeeFeatureSelector = createFeatureSelector<IEmployeeState>('employee');

export const employeeSelector = createSelector(employeeFeatureSelector, (state: IEmployeeState) => state.employees);

export const employeeDataSelector = createSelector(employeeFeatureSelector, (state: IEmployeeState) => state.employees.data);

export const selectedEmployeeSelector = createSelector(employeeFeatureSelector, (state: IEmployeeState) => state.selectedEmployee.data);
