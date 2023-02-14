import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TableComponent } from 'src/app/shared/components/table/table.component';
import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeesPageComponent } from './pages/employees-page/employees-page.component';
import { EmployeeAddComponent } from './pages/employee-add/employee-add.component';
import { EmployeeTabsComponent } from './components/employee-tabs/employee-tabs.component';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { EmployeeProfileComponent } from './pages/employee-profile/employee-profile.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { SkillsFormComponent } from 'src/app/shared/components/forms/skills-form/skills-form.component';
import { GeneralFormComponent } from 'src/app/shared/components/forms/general-form/general-form.component';
import { LanguagesFormComponent } from 'src/app/shared/components/forms/languages-form/languages-form.component';
import { ProjectsFormComponent } from 'src/app/shared/components/forms/projects-form/projects-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmployeeInfoComponent } from './components/employee-info/employee-info.component';
import { EmployeeCvComponent } from './components/employee-cv/employee-cv.component';

@NgModule({
  declarations: [
    EmployeesPageComponent,
    EmployeeAddComponent,
    EmployeeTabsComponent,
    EmployeeProfileComponent,
    EmployeeInfoComponent,
    EmployeeCvComponent,
  ],
  imports: [
    EmployeesRoutingModule,
    CommonModule,
    TableComponent,
    NzTabsModule,
    NzButtonModule,
    SkillsFormComponent,
    GeneralFormComponent,
    LanguagesFormComponent,
    ProjectsFormComponent,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
})
export class EmployeesModule {}
