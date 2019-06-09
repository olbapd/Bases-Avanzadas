import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientComponent } from './client.component';
import { MoveComponent } from './moveData/move.component';
import { RegisterComponent } from  './registerUser/register.component';

const routes: Routes = [{ path: '', component: ClientComponent, 
      children: [
        { path: 'move', component: MoveComponent },
        { path: 'register', component: RegisterComponent },
        {path: '', redirectTo: 'move', pathMatch: 'full',},
        {path: '**', redirectTo: 'move', pathMatch: 'full',}
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientRoutingModule { }

export const routedComponents = [
  MoveComponent,
  RegisterComponent,
  ClientComponent
];
