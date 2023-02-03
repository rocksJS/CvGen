import { createReducer, on } from '@ngrx/store';
import { IEmployee } from 'src/app/shared/interfaces/employee.interface';
import { IStrapiRequest } from 'src/app/shared/interfaces/request.interface';
import { loadEmployeesSuccess } from '../actions/employee.actions';

export interface IEmployeeState {
  employees: IStrapiRequest;
}

const initialState: IEmployeeState = {
  employees: {
    data: [],
    meta: {},
  },
};

export const employeeReducer = createReducer(
  initialState,
  on(loadEmployeesSuccess, (state, { employees }) => ({
    ...state,
    employees: employees,
  }))
);
