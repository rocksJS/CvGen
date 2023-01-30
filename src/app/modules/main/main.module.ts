import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SubheaderComponent } from './components/subheader/subheader.component';
import { MainRoutingModule } from './main-routing.module';
import { MainPageComponent } from './pages/main-page/main-page.component';

@NgModule({
  declarations: [MainPageComponent, HeaderComponent, SubheaderComponent, SidebarComponent],
  imports: [MainRoutingModule, CommonModule, NzIconModule, NzMenuModule, NzToolTipModule],
})
export class MainModule {}
