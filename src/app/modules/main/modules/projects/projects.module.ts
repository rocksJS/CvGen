import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { ProjectsFormComponent } from 'src/app/shared/components/forms/projects-form/projects-form.component';
import { SaveCancelButtonsComponent } from 'src/app/shared/components/save-cancel-buttons/save-cancel-buttons.component';
import { TableComponent } from 'src/app/shared/components/table/table.component';
import { ProjectAddComponent } from './pages/project-add/project-add.component';
import { ProjectInfoComponent } from './pages/project-info/project-info.component';
import { ProjectsPageComponent } from './pages/projects-page/projects-page.component';
import { ProjectsRoutingModule } from './projects-routing.module';

@NgModule({
  declarations: [ProjectsPageComponent, ProjectInfoComponent, ProjectAddComponent],
  imports: [ProjectsRoutingModule, CommonModule, TableComponent, ProjectsFormComponent, NzButtonModule],
})
export class ProjectsModule {}
