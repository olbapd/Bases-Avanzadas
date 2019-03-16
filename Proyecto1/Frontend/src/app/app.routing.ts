import { Routes } from '@angular/router';

export const AppRoutes: Routes = [
  { path: 'auth', loadChildren: './auth/auth.module#AuthModule' },
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  { path: '**', redirectTo: 'auth' },
];
