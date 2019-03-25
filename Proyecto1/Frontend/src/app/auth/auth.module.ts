import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from "./register/register.component";
import { LoginComponent } from "./login/login.component";
import {ManagerComponent} from "./manager/manager.component";

//import { AuthService } from '../services/auth/auth.service'

import { AuthRoutes } from './auth.routing';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AuthRoutes),
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [   
      RegisterComponent,
      LoginComponent,
      ManagerComponent
  
  ],
  providers: [/*AuthService*/]
})

export class AuthModule {}
