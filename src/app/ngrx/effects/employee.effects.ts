import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EmployeesApiService } from 'src/app/shared/services/api/employees.api.service';
import {
  loadEmployees,
  loadEmployeesFailure,
  loadEmployeesSuccess,
  loadSelectedEmployee,
  loadSelectedEmployeeSuccess,
} from '../actions/employee.actions';
import { catchError, map, of, switchMap, take, filter } from 'rxjs';
import { IEmployee } from 'src/app/shared/interfaces/employee.interface';
import { IStrapiRequest } from 'src/app/shared/interfaces/request.interface';

@Injectable()
export class EmployeeEffects {
  constructor(private actions$: Actions, private employeesApiService: EmployeesApiService) {}

  loadEmployees$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadEmployees),
      switchMap(() =>
        this.employeesApiService.getEmployees().pipe(
          map((employees: IStrapiRequest) => {
            return loadEmployeesSuccess({ employees });
          }),
          catchError((error) => of(loadEmployeesFailure({ error })))
        )
      )
    )
  );

  loadSelectedEmployee$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadSelectedEmployee),
      switchMap((action) =>
        this.employeesApiService.getSelectedEmployee(action.employeeId).pipe(
          map((employee: IStrapiRequest) => {
            return loadSelectedEmployeeSuccess({ employee });
          }),
          catchError((error) => of(loadEmployeesFailure({ error })))
        )
      )
    )
  );
}
