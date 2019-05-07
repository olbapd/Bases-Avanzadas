import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientComponent } from './client.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [{
  path: '',
  component: ClientComponent,
  children: [
    {
      path: 'edit',
      component: EditComponent,
    },{
      path: '',
      redirectTo: 'edit',
      pathMatch: 'full',
    }, {
      path: '**',
      redirectTo: 'edit',
      pathMatch: 'full',
    }    
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientRoutingModule { }

export const routedComponents = [
  ClientComponent,
  EditComponent
];
