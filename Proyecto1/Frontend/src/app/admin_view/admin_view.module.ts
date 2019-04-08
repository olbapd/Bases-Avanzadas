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
import {MatIconModule, MatCardModule, MatToolbarModule} from '@angular/material';
import {MatDialogModule} from '@angular/material/dialog';
import { updateComponent } from './dialogs/update_employee/update-employee.component';
import { DeleteComponent } from './dialogs/delete_confirm/delete_confirm.component';
import { UpdateSedeComponent } from './dialogs/update_sede/udpate-sede.component';
import {CodeErrorComponent} from './dialogs/code_error/code_error.component';
import { FotoService } from '../services/foto.service';

import {DataTableModule} from "angular2-datatable";
import { Observable, of } from 'rxjs'; // only need to import from rxjs
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Depreciation } from '../services/depreciation';
import { FirstMethodComponent } from './dialogs/first_method/first-method.component';
import { SecondMethodComponent } from './dialogs/second_method/second-method.component';
import { ChartsModule } from 'ng2-charts';
import { DashboardComponent } from './Dashboard/dashboard.component';
import { SecondReportComponent } from './dialogs/second_report/second_report.component';
import { ThirdReportComponent } from './dialogs/third_report/third_report.component';
import { ReportComponent } from './reports/report.component';
import { FirstReportComponent } from './dialogs/first_report/first_report.component';

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
    ReactiveFormsModule,
    DataTableModule,
    Ng2SearchPipeModule,
    ChartsModule
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
    CodeErrorComponent,
    FirstMethodComponent,
    SecondMethodComponent,
    DashboardComponent,
    ReportComponent,
    FirstReportComponent,
    SecondReportComponent,
    ThirdReportComponent


  ],
  providers: [
    FotoService, Depreciation
  ],
  entryComponents:[updateComponent, DeleteComponent, UpdateSedeComponent,
    CodeErrorComponent,FirstMethodComponent,SecondMethodComponent,
    FirstReportComponent, SecondReportComponent, ThirdReportComponent]
})

export class Admin_ViewModule { }
