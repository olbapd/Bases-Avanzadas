import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientComponent } from './client.component';
import { RegisterComponent } from './registerUser/register.component';
import { OrderComponent } from './order/order.component';
import { HistoryComponent } from './history/history.component';

const routes: Routes = [{
  path: '', component: ClientComponent,
  children: [
    { path: 'register', component: RegisterComponent },
    { path: 'order', component: OrderComponent },
    { path: 'history', component: HistoryComponent },
    { path: '', redirectTo: 'order', pathMatch: 'full', },
    { path: '**', redirectTo: 'order', pathMatch: 'full', }
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientRoutingModule { }

export const routedComponents = [
  RegisterComponent,
  ClientComponent,
  HistoryComponent,
  OrderComponent

];
