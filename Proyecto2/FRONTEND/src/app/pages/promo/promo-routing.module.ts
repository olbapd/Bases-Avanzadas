import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PromoComponent } from './promo.component';
import { MainComponent } from './main/main.component';
import { AgregarComponent } from './agregar/agregar.component';

const routes: Routes = [{
  path: '',
  component: PromoComponent,
  children: [
    {
      path: 'main',
      component: MainComponent,
    },
    {
      path: 'agregar',
      component: AgregarComponent,
    },{
      path: '',
      redirectTo: 'agregar',
      pathMatch: 'full',
    }, {
      path: '**',
      redirectTo: 'agregar',
      pathMatch: 'full',
    }    
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PromoRoutingModule { }

export const routedComponents = [
  PromoComponent,
  MainComponent,
  AgregarComponent
];
