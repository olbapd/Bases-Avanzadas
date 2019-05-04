import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [/*{
    path: 'inicio',
    component: InicioComponent,
  }, */{
    path: 'auth',
    loadChildren: '../auth/auth.module#AuthModule',
  }, {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full',
  }, {
    path: '**',
    redirectTo: 'auth',
    pathMatch: 'full',
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
