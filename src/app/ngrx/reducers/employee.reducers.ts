import { createReducer, on } from '@ngrx/store';
import { IEmployee } from 'src/app/shared/interfaces/employee.interface';
import { loadEmployeesSuccess } from '../actions/employee.actions';

export interface IEmployeeState {
  employees: IEmployee[];
}

const initialState: IEmployeeState = {
  employees: [],
};

export const employeeReducer = createReducer(
  initialState,
  on(loadEmployeesSuccess, (state, { employees }) => ({
    ...state,
    employees: employees,
  }))
);
