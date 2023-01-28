import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthPageComponent } from './pages/auth-page/auth-page.component';
import { AuthRoutingModule } from './auth-routing.module';
import { InputControlComponent } from 'src/app/shared/components/input-control/input-control.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SelectControlComponent } from 'src/app/shared/components/select-control/select-control.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { TranslateButtonComponent } from 'src/app/shared/components/translate-button/translate-button.component';
import { NzIconModule } from 'ng-zorro-antd/icon';

@NgModule({
  declarations: [AuthPageComponent],
  imports: [
    AuthRoutingModule,
    CommonModule,
    InputControlComponent,
    TranslateButtonComponent,
    ReactiveFormsModule,
    FormsModule,
    SelectControlComponent,
    NzButtonModule,
    NzCheckboxModule,
    NzIconModule,
  ],
})
export class AuthModule {}
