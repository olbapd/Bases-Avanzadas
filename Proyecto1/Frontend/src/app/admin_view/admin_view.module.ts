import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminComponent } from "./admin/admin.component";
//import { AuthService } from '../services/auth/auth.service'
import { ManageAssetsComponent } from './manage-assets/manage-assets.component';
import { DepreciationComponent } from './cal_depreciation/depreciation.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Admin_ViewRoutes } from './admin_view.routing';
import { EmployeeComponent } from './crud_employee/crud_employee.component';
import {HttpClientModule} from '@angular/common/http';
import { HttpClient } from 'selenium-webdriver/http';
import { SedeComponent } from './crud_sede/crud_sede.component';
import {MatDialogModule, MatIconModule, MatCardModule, MatToolbarModule} from '@angular/material';
import { updateComponent } from './dialogs/update_employee/update-employee.component';
import { DeleteComponent } from './dialogs/delete_confirm/delete_confirm.component';
import { UpdateSedeComponent } from './dialogs/update_sede/udpate-sede.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(Admin_ViewRoutes),
    NgbModule.forRoot(),
    ReactiveFormsModule,
    HttpClientModule,
    MatDialogModule,
    MatIconModule,
    MatCardModule,
    MatToolbarModule,
    ReactiveFormsModule
  ],
  declarations: [
    AdminComponent,
    ManageAssetsComponent,
    DepreciationComponent,
    EmployeeComponent,
    SedeComponent,
    updateComponent,
    DeleteComponent,
    UpdateSedeComponent,


  ],
  providers: [],
  entryComponents:[updateComponent, DeleteComponent, UpdateSedeComponent]
})

export class Admin_ViewModule { }
