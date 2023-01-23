import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesPageComponent } from './pages/employees-page/employees-page.component';
import { EmployeesRoutingModule } from './employees-routing.module';

@NgModule({
  declarations: [EmployeesPageComponent],
  imports: [EmployeesRoutingModule, CommonModule],
})
export class EmployeesModule {}
