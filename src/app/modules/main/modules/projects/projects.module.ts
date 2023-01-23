import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsPageComponent } from './pages/projects-page/projects-page.component';
import { ProjectsRoutingModule } from './projects-routing.module';

@NgModule({
  declarations: [ProjectsPageComponent],
  imports: [ProjectsRoutingModule, CommonModule],
})
export class ProjectsModule {}
