import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';


const routes: Routes = [
  {
    path: '', component: PagesComponent, children:
      [{ path: 'client', loadChildren: './client/client.module#ClientModule', },
      { path: 'admin', loadChildren: './admin/admin.module#AdminModule', },
      { path: 'auth', loadChildren: '../auth/auth.module#AuthModule', },
      { path: 'maps', loadChildren: './maps/agm.module#AgmModule', },
      { path: '**', redirectTo: 'client', pathMatch: 'full', },
      { path: '', redirectTo: 'client', pathMatch: 'full', }
      ],
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {

}

