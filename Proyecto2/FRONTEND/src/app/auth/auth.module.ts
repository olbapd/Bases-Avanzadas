import { NgModule } from '@angular/core';
import { AuthRoutingModule, routedComponents } from './auth-routing.module';

import { ReactiveFormsModule, FormsModule }  from '@angular/forms';


@NgModule({
  imports: [
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    ...routedComponents,
  ]
})
export class AuthModule { }
