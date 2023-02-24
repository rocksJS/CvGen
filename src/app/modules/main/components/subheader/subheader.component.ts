import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { IBreadcrumb } from 'src/app/shared/interfaces/breadcrumb.interface';
import { BreadcrumbService } from 'src/app/shared/services/breadcrumbs.service';

@Component({
  selector: 'cvg-subheader',
  templateUrl: './subheader.component.html',
  styleUrls: ['./subheader.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SubheaderComponent {
  breadcrumbs$: Observable<IBreadcrumb[]>;

  constructor(private readonly breadcrumbService: BreadcrumbService) {
    this.breadcrumbs$ = breadcrumbService.breadcrumbs$;
  }
}
