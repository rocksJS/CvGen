import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IProjectData } from 'src/app/shared/interfaces/project.interface';

@Component({
  selector: 'cvg-project-info',
  templateUrl: './project-info.component.html',
  styleUrls: ['./project-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectInfoComponent {
  // constructor() {}
  // public saveProject(formValue: IProjectData) {}
}
