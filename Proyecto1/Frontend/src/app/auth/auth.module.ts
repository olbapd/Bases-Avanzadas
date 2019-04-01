import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from "./register/register.component";
import { LoginComponent } from "./login/login.component";
import {ManagerComponent} from "./manager/manager.component";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {LoginFailedComponent} from './dialogs/login_Failed/login_Failed.component';
import {MatDialogModule, MatIconModule, MatCardModule, MatToolbarModule} from '@angular/material';
//import { AuthService } from '../services/auth/auth.service'
import { ShowHidePasswordModule } from 'ngx-show-hide-password';

import { AuthRoutes } from './auth.routing';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AuthRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatIconModule,
    MatCardModule,
    MatToolbarModule,
    ReactiveFormsModule,
    NgbModule.forRoot(),
    ShowHidePasswordModule
  ],
  declarations: [   
      RegisterComponent,
      LoginComponent,
      ManagerComponent,
      LoginFailedComponent
  ],
  providers: [/*AuthService*/],
  entryComponents:[LoginFailedComponent]
})

export class AuthModule {}
