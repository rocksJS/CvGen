import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { PlusButtonComponent } from 'src/app/shared/components/buttons/plus-button/plus-button.component';
import { GeneralFormComponent } from 'src/app/shared/components/forms/general-form/general-form.component';
import { LanguagesFormComponent } from 'src/app/shared/components/forms/languages-form/languages-form.component';
import { ProjectsFormComponent } from 'src/app/shared/components/forms/projects-form/projects-form.component';
import { SkillsFormComponent } from 'src/app/shared/components/forms/skills-form/skills-form.component';
import { MultiSelectControlComponent } from 'src/app/shared/components/multi-select-control/multi-select-control.component';
import { SelectControlComponent } from 'src/app/shared/components/select-control/select-control.component';
import { TableComponent } from 'src/app/shared/components/table/table.component';
import { ExtractNamesPipe } from 'src/app/shared/pipes/extract-name.pipe';
import { EmployeeCollapseComponent } from './components/employee-collapse/employee-collapse.component';
import { EmployeeCvComponent } from './components/employee-cv/employee-cv.component';
import { EmployeeInfoComponent } from './components/employee-info/employee-info.component';
import { EmployeeTabsComponent } from './components/employee-tabs/employee-tabs.component';
import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeeAddComponent } from './pages/employee-add/employee-add.component';
import { EmployeeProfileComponent } from './pages/employee-profile/employee-profile.component';
import { EmployeesPageComponent } from './pages/employees-page/employees-page.component';

@NgModule({
  declarations: [
    EmployeesPageComponent,
    EmployeeAddComponent,
    EmployeeTabsComponent,
    EmployeeProfileComponent,
    EmployeeInfoComponent,
    EmployeeCvComponent,
    EmployeeCollapseComponent,
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
    NzCollapseModule,
    SelectControlComponent,
    MultiSelectControlComponent,
    PlusButtonComponent,
    ExtractNamesPipe,
  ],
  providers: [],
})
export class EmployeesModule {}
