import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AUTH_PATH } from './shared/consts/routing-paths';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('../app/modules/main/main.module').then(
        (module) => module.MainModule
      ),
  },
  {
    path: AUTH_PATH.path,
    loadChildren: () =>
      import('../app/modules/auth/auth.module').then(
        (module) => module.AuthModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
