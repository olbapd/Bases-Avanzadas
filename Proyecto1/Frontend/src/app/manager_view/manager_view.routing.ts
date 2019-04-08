import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import {ManageAssetsComponent} from './manage-assets/manage-assets.component';
import { DepreciationComponent } from './cal_depreciation/depreciation.component';
import { EmployeeComponent } from './crud_employee/crud_employee.component';
import { SedeComponent } from './crud_sede/crud_sede.component';
import { DashboardComponent } from './Dashboard/dashboard.component';
import { ReportComponent } from './reports/report.component';

export const Manager_ViewRoutes: Routes = [
    { path: 'admin',  component: AdminComponent },
    { path: 'manage-assets', component:ManageAssetsComponent},
    { path: 'cal-depreciation', component:DepreciationComponent},
    { path: 'crud-employee', component:EmployeeComponent},
    { path: 'manager-dashboard', component:DashboardComponent},   
    { path: 'crud-sede', component:SedeComponent},
    { path: 'reporte', component:ReportComponent},
    { path: '', redirectTo: 'admin', pathMatch: 'full' },
    { path: '**', redirectTo: 'admin' },
];