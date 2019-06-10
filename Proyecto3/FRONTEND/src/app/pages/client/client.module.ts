import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { ClientComponent } from './client.component';
import { ClientRoutingModule, routedComponents } from './client-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    ClientRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    ...routedComponents
  ],
  providers: [
  ]
})
export class ClientModule {
}
