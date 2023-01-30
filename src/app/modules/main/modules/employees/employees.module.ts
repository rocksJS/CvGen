import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesPageComponent } from './pages/employees-page/employees-page.component';
import { EmployeesRoutingModule } from './employees-routing.module';
import { TableComponent } from 'src/app/shared/components/table/table.component';

@NgModule({
  declarations: [EmployeesPageComponent],
  imports: [EmployeesRoutingModule, CommonModule, TableComponent],
})
export class EmployeesModule {}
