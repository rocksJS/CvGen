import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectedProjectSelector } from 'src/app/ngrx/selectors/project.selectors';

@Injectable({
  providedIn: 'root',
})
export class ProjectResolverService implements Resolve<any> {
  constructor(private readonly http: HttpClient, private store: Store) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.store.select(selectedProjectSelector);
  }
}
