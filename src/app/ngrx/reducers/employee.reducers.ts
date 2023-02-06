import { createReducer, on } from '@ngrx/store';
import { IStrapiRequest } from 'src/app/shared/interfaces/request.interface';
import { loadEmployeesSuccess, loadSelectedEmployeeSuccess } from '../actions/employee.actions';

export interface IEmployeeState {
  employees: IStrapiRequest;
  selectedEmployee: IStrapiRequest;
}

const initialState: IEmployeeState = {
  employees: {
    data: [],
    meta: {},
  },
  selectedEmployee: {
    data: {},
    meta: {},
  },
};

export const employeeReducer = createReducer(
  initialState,
  on(loadEmployeesSuccess, (state, { employees }) => ({
    ...state,
    employees: employees,
  })),
  on(loadSelectedEmployeeSuccess, (state, { employee }) => ({
    ...state,
    selectedEmployee: employee,
  }))
);
