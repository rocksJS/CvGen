import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IBreadcrumb } from 'src/app/shared/interfaces/breadcrumb.interface';
import { Title } from '@angular/platform-browser';
import { BreadcrumbService } from 'src/app/shared/services/breadcrumbs.service';

@Component({
  selector: 'cvg-subheader',
  templateUrl: './subheader.component.html',
  styleUrls: ['./subheader.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SubheaderComponent {
  breadcrumbs$: Observable<IBreadcrumb[]>;

  constructor(private titleService: Title, private breadcrumbService: BreadcrumbService) {
    this.breadcrumbs$ = breadcrumbService.breadcrumbs$;
  }

  // private createTitle(routesCollection: Breadcrumb[]) {
  //   const title = 'Angular Demo';
  //   const titles = routesCollection.filter((route) => route.displayName);

  //   if (!titles.length) {
  //     return title;
  //   }

  //   const routeTitle = this.titlesToString(titles);
  //   return `${routeTitle} ${title}`;
  // }

  // private titlesToString(titles: any) {
  //   return titles.reduce((prev: any, curr: any) => {
  //     return `${curr.displayName} - ${prev}`;
  //   }, '');
  // }

  // getAnimationData(outlet: RouterOutlet) {
  //   return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  // }

  // ngOnInit(): void {
  //   this.breadcrumbService.breadcrumbChanged.subscribe((crumbs) => {
  //     this.titleService.setTitle(this.createTitle(crumbs));
  //   });
  // }
}
