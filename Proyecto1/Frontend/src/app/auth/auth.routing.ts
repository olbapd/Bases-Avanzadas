import { Routes } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { ManagerComponent } from './manager/manager.component';
import {ManageAssetsComponent} from './manage-assets/manage-assets.component';

export const AuthRoutes: Routes = [
    { path: 'login',  component: LoginComponent },
    { path: 'register',  component: RegisterComponent },
    { path: 'admin',  component: AdminComponent },
    { path: 'manager',  component: ManagerComponent },
    {path: 'manage-assets', component:ManageAssetsComponent},
    { path: '', redirectTo: 'admin', pathMatch: 'full' },
    { path: '**', redirectTo: 'admin' },
];
