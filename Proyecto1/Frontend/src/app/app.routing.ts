import { Routes, RouterModule } from '@angular/router';
import { HomeEmployeeComponent } from './employeeHome.component';


export const AppRoutes: Routes = [
  { path: 'auth', loadChildren: './auth/auth.module#AuthModule' },
  { path: 'admin_view', loadChildren: './admin_view/admin_view.module#Admin_ViewModule' },
<<<<<<< HEAD
  { path: 'manager_view', loadChildren: './manager_view/manager_view.module#Manager_ViewModule' },
=======
  
  { path: 'employee', component: HomeEmployeeComponent },

>>>>>>> 16558b9849e67cb28a9f132ede17f81aa1a12444
  { path: '', redirectTo: 'auth/login', pathMatch: 'full' },
  { path: '**', redirectTo: 'auth/login' },
];