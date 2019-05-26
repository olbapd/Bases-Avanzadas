import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrderComponent } from './order.component';
import { MainComponent } from './main/main.component';
import { EditComponent } from './edit/edit.component';
import { AgregarComponent } from './agregar/agregar.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [{
  path: '',
  component: OrderComponent,
  children: [
    {
      path: 'edit',
      component: EditComponent,
    },{
      path: 'main',
      component: MainComponent,
    },
    {
      path: 'view',
      component: ViewComponent,
    },{
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
export class OrderRoutingModule { }

export const routedComponents = [
  OrderComponent,
  EditComponent,
  MainComponent,
  AgregarComponent,
  ViewComponent
];
