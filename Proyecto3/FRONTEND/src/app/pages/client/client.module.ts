import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { ClientComponent } from './client.component';
import { ClientRoutingModule, routedComponents } from './client-routing.module';

@NgModule({
  imports: [
    ClientRoutingModule,
    CommonModule
  ],
  declarations: [
    ...routedComponents
  ],
  providers: [
  ]
})
export class ClientModule {
}
