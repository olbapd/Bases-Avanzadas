import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { ClientComponent } from './client/client.component';


const routes: Routes = [
  {  path: '', component: PagesComponent, children: 
    [ { path: 'client', loadChildren: './client/client.module#ClientModule', },
      { path: 'auth', loadChildren: '../auth/auth.module#AuthModule', },
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

