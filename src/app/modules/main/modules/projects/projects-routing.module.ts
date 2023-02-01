import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PROJECT_ADD_PATH, PROJECT_INFO_PATH } from 'src/app/shared/consts/routing-paths.consts';
import { ProjectAddComponent } from './pages/project-add/project-add.component';
import { ProjectInfoComponent } from './pages/project-info/project-info.component';
import { ProjectsPageComponent } from './pages/projects-page/projects-page.component';

const routes: Routes = [
  { path: '', component: ProjectsPageComponent },
  {
    path: PROJECT_ADD_PATH.path,
    component: ProjectAddComponent,
  },
  { path: PROJECT_INFO_PATH.idPath, component: ProjectInfoComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectsRoutingModule {}
