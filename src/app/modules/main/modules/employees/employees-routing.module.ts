import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ADD_PATH, EMPLOYEE_ADD_PATH, EMPLOYEE_PROFILE_PATH } from 'src/app/shared/consts/routing-paths.consts';
import { EmployeeResolverService } from 'src/app/shared/services/resolvers/employees.resolver.service';
import { EmployeeAddComponent } from './pages/employee-add/employee-add.component';
import { EmployeeProfileComponent } from './pages/employee-profile/employee-profile.component';
import { EmployeesPageComponent } from './pages/employees-page/employees-page.component';

const routes: Routes = [
  { path: '', component: EmployeesPageComponent },
  {
    path: EMPLOYEE_ADD_PATH.path,
    component: EmployeeAddComponent,
    data: {
      breadcrumb: 'Add employee',
    },
  },
  {
    path: EMPLOYEE_PROFILE_PATH.idPath,
    component: EmployeeProfileComponent,
    data: {
      breadcrumb: (data: any) => `${data.employee}`,
      resolve: { employee: EmployeeResolverService },
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeesRoutingModule {}
