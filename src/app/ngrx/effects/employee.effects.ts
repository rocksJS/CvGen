import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EmployeesApiService } from 'src/app/shared/services/api/employees.service';
import { loadEmployees, loadEmployeesFailure, loadEmployeesSuccess } from '../actions/employee.actions';
import { catchError, map, of, switchMap, take, filter } from 'rxjs';
import { IEmployee } from 'src/app/shared/interfaces/employee.interface';

@Injectable()
export class EmployeeEffects {
  constructor(private actions$: Actions, private employeesApiService: EmployeesApiService) {}

  loadEmployees$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadEmployees),
      switchMap(() =>
        this.employeesApiService.getEmployees().pipe(
          take(1),
          filter((employees) => !!employees.length),
          map((employees: IEmployee[]) => {
            return loadEmployeesSuccess({ employees });
          }),
          catchError((error) => of(loadEmployeesFailure({ error })))
        )
      )
    )
  );
}
