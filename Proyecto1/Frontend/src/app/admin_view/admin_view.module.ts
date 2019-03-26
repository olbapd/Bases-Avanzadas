import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminComponent } from "./admin/admin.component";
//import { AuthService } from '../services/auth/auth.service'
import { BrowserModule } from '@angular/platform-browser';
import { ManageAssetsComponent } from './manage-assets/manage-assets.component';
import { DepreciationComponent } from './cal_depreciation/depreciation.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Admin_ViewRoutes } from './admin_view.routing';
import { EmployeeComponent } from './crud_employee/crud_employee.component';
import {HttpClientModule} from '@angular/common/http';
import { HttpClient } from 'selenium-webdriver/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(Admin_ViewRoutes),
    NgbModule.forRoot(),
    ReactiveFormsModule,
    HttpClientModule
  ],
  declarations: [
    AdminComponent,
    ManageAssetsComponent,
    DepreciationComponent,
    EmployeeComponent

  ],
  providers: []
})

export class Admin_ViewModule { }
