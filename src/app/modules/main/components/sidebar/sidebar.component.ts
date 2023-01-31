import { ChangeDetectionStrategy, Component } from '@angular/core';
import { EMPLOYEES_PATH, PROJECTS_PATH } from 'src/app/shared/consts/routing-paths.consts';

@Component({
  selector: 'cvg-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarComponent {
  isCollapsed = false;

  public readonly employeeFullpath = EMPLOYEES_PATH.fullPath;

  public readonly projectsFullpath = PROJECTS_PATH.fullPath;

  toggleCollapsed(): void {
    this.isCollapsed = !this.isCollapsed;
  }
}
