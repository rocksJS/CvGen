import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main-routing.module';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { HeaderComponent } from './components/header/header.component';
import { SubheaderComponent } from './components/subheader/subheader.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@NgModule({
  declarations: [
    MainPageComponent,
    HeaderComponent,
    SubheaderComponent,
    SidebarComponent
  ],
  imports: [MainRoutingModule, CommonModule],
})
export class MainModule {}
