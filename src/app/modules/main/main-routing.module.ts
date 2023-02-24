import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DASHBOARD_PATH, EMPLOYEES_PATH, PROJECTS_PATH } from 'src/app/shared/consts/routing-paths.consts';
import { MainPageComponent } from './pages/main-page/main-page.component';

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
    children: [
      {
        path: EMPLOYEES_PATH.path,
        loadChildren: () => import('./modules/employees/employees.module').then((module) => module.EmployeesModule),
        data: {
          breadcrumb: 'Employees',
        },
      },
      {
        path: PROJECTS_PATH.path,
        loadChildren: () => import('./modules/projects/projects.module').then((module) => module.ProjectsModule),
        data: {
          breadcrumb: 'Projects',
        },
      },
      {
        path: '',
        loadChildren: () => import('./modules/dashboard/dashboard.module').then((module) => module.DashboardModule),
        data: {
          breadcrumb: 'Dashboard',
        },
      },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
