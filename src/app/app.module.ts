import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { en_US, NZ_I18N } from 'ng-zorro-antd/i18n';

import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './shared/guards/auth.guard';
import { TokenInterceptor } from './shared/interceptors/token.interceptor';
import { EmployeeResolverService } from './shared/services/resolvers/employees.resolver.service';
import { ProjectResolverService } from './shared/services/resolvers/projects.resolver.service';
import { StateModule } from './state.module';

registerLocaleData(en);

@NgModule({
  declarations: [AppComponent],
  imports: [AppRoutingModule, CommonModule, BrowserModule, BrowserAnimationsModule, HttpClientModule, StateModule],
  providers: [
    { provide: NZ_I18N, useValue: en_US },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
    AuthGuard,

    EmployeeResolverService,
    ProjectResolverService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
