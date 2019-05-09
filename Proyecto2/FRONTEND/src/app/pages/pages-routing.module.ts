import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { AdminComponent } from './admin/admin.component';
import { OrderComponent } from './order/order.component';
import { BookComponent } from './book/book.component';
import { PromoComponent } from './promo/promo.component';
import { ClientComponent } from './client/client.component';
import { ReportComponent } from './report/report.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
  {
    path: 'report',
    loadChildren: './report/report.module#ReportModule',
  },{
    path: 'client',
    loadChildren: './client/client.module#ClientModule',
  },{
    path: 'promo',
    loadChildren: './promo/promo.module#PromoModule',
  },{
    path: 'book',
    loadChildren: './book/book.module#BookModule',
  },{
    path: 'order',
    loadChildren: './order/order.module#OrderModule',
  },{
    path: 'admin',
    loadChildren: './admin/admin.module#AdminModule',
  },{
    path: 'auth',
    loadChildren: '../auth/auth.module#AuthModule',
  }, {
    path: '',
    redirectTo: 'report',
    pathMatch: 'full',
  }, {
    path: '**',
    redirectTo: 'report',
    pathMatch: 'full',
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
