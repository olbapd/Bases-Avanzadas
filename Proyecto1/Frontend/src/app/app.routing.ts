import { Routes, RouterModule } from '@angular/router';
import { HomeEmployeeComponent } from './employeeHome.component';


export const AppRoutes: Routes = [
  { path: 'auth', loadChildren: './auth/auth.module#AuthModule' },
  { path: 'admin_view', loadChildren: './admin_view/admin_view.module#Admin_ViewModule' },

  { path: 'manager_view', loadChildren: './manager_view/manager_view.module#Manager_ViewModule' },
  
  { path: 'employee', component: HomeEmployeeComponent },

  { path: '', redirectTo: 'auth/login', pathMatch: 'full' },
  { path: '**', redirectTo: 'auth/login' },
];