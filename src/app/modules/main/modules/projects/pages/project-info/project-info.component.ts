import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'cvg-project-info',
  templateUrl: './project-info.component.html',
  styleUrls: ['./project-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectInfoComponent {}
