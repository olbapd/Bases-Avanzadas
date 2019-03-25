import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {AdminComponent} from "./admin/admin.component";
//import { AuthService } from '../services/auth/auth.service'
import { BrowserModule } from '@angular/platform-browser';

import { Admin_ViewRoutes } from './admin_view.routing';
import { ManageAssetsComponent } from './manage-assets/manage-assets.component';

@NgModule({
  
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(Admin_ViewRoutes)
  ],
  declarations: [  
    AdminComponent,
    ManageAssetsComponent 
      
  ],
  providers: []
})

export class Admin_ViewModule {}
