import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadEmployees } from 'src/app/ngrx/actions/employee.actions';
import { loadLanguages } from 'src/app/ngrx/actions/language.actions';
import { loadPositions } from 'src/app/ngrx/actions/position.actions';
import { loadProjects } from 'src/app/ngrx/actions/project.actions';
import { loadResponsibilities } from 'src/app/ngrx/actions/responsibility.actions';
import { loadSkills } from 'src/app/ngrx/actions/skill.actions';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainPageComponent implements OnInit {
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(loadEmployees());
    this.store.dispatch(loadProjects());
    this.store.dispatch(loadSkills());
    this.store.dispatch(loadLanguages());
    this.store.dispatch(loadPositions());
    this.store.dispatch(loadResponsibilities());
  }
}
