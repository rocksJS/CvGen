import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TableComponent } from 'src/app/shared/components/table/table.component';
import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeesPageComponent } from './pages/employees-page/employees-page.component';
import { EmployeeAddComponent } from './pages/employee-add/employee-add.component';

@NgModule({
  declarations: [EmployeesPageComponent, EmployeeAddComponent],
  imports: [EmployeesRoutingModule, CommonModule, TableComponent],
  providers: [],
})
export class EmployeesModule {}
