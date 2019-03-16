import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from "./register.component";
//import { AuthService } from '../services/auth/auth.service'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [   
      RegisterComponent
  ],
  providers: [/*AuthService*/]
})

export class RegisterModule {}
