import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Store } from '@ngrx/store';
import { filter, Observable } from 'rxjs';
import { selectedEmployeeSelector } from 'src/app/ngrx/selectors/employee.selectors';
import { IRequestData } from '../../interfaces/shared/data.interface';

@Injectable({
  providedIn: 'root',
})
export class EmployeeResolverService implements Resolve<IRequestData> {
  constructor(private readonly http: HttpClient, private store: Store) {}

  resolve(): Observable<IRequestData> {
    return this.store.select(selectedEmployeeSelector).pipe(filter((employee) => !!employee));
  }
}
