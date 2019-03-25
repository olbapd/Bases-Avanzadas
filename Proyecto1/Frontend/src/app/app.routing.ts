import { Routes } from '@angular/router';


export const AppRoutes: Routes = [
  { path: 'auth', loadChildren: './auth/auth.module#AuthModule' },
  { path: 'admin_view', loadChildren: './admin_view/admin_view.module#Admin_ViewModule' },
  { path: '', redirectTo: 'auth/login', pathMatch: 'full' },
  { path: '**', redirectTo: 'auth/login' },
];
