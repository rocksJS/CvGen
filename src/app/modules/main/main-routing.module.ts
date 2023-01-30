import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DASHBOARD_PATH, EMPLOYEES_PATH, PROJECTS_PATH } from 'src/app/shared/consts/routing-paths';
import { MainPageComponent } from './pages/main-page/main-page.component';

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
    children: [
      {
        path: EMPLOYEES_PATH.path,
        loadChildren: () => import('./modules/employees/employees.module').then((module) => module.EmployeesModule),
      },
      {
        path: PROJECTS_PATH.path,
        loadChildren: () => import('./modules/projects/projects.module').then((module) => module.ProjectsModule),
      },
      {
        path: '',
        loadChildren: () => import('./modules/dashboard/dashboard.module').then((module) => module.DashboardModule),
      },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
