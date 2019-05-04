import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [/*{
    path: 'admin',
    component: AdminComponent,
  },*/ 
  {
    path: 'admin',
    loadChildren: './admin/admin.module#AdminModule',
  }, {
    path: 'auth',
    loadChildren: '../auth/auth.module#AuthModule',
  }, {
    path: '',
    redirectTo: 'admin',
    pathMatch: 'full',
  }, {
    path: '**',
    redirectTo: 'admin',
    pathMatch: 'full',
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
