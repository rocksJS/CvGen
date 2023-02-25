import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { selectedEmployeeSelector } from 'src/app/ngrx/selectors/employee.selectors';
import { selectedProjectSelector } from 'src/app/ngrx/selectors/project.selectors';
import { IEmployee } from '../../interfaces/employee.interface';
import { IRequestData } from '../../interfaces/shared/data.interface';

@Injectable({
  providedIn: 'root',
})
export class EmployeeResolverService implements Resolve<IRequestData> {
  constructor(private readonly http: HttpClient, private store: Store) {}

  resolve(): Observable<IRequestData> {
    return this.store.select(selectedEmployeeSelector);
  }
}
