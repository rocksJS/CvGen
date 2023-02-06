import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TableComponent } from 'src/app/shared/components/table/table.component';
import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeesPageComponent } from './pages/employees-page/employees-page.component';
import { EmployeeAddComponent } from './pages/employee-add/employee-add.component';
import { EmployeeTabsComponent } from './components/employee-tabs/employee-tabs.component';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { EmployeeProfileComponent } from './pages/employee-profile/employee-profile.component';

@NgModule({
  declarations: [EmployeesPageComponent, EmployeeAddComponent, EmployeeTabsComponent, EmployeeProfileComponent],
  imports: [EmployeesRoutingModule, CommonModule, TableComponent, NzTabsModule],
  providers: [],
})
export class EmployeesModule {}
