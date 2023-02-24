import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { selectedEmployeeSelector } from 'src/app/ngrx/selectors/employee.selectors';
import { selectedProjectSelector } from 'src/app/ngrx/selectors/project.selectors';

@Injectable({
  providedIn: 'root',
})
export class EmployeeResolverService implements Resolve<any> {
  constructor(private readonly http: HttpClient, private store: Store) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.store.select(selectedEmployeeSelector);
  }
}
