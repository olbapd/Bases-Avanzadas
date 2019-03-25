import { Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import {ManageAssetsComponent} from './manage-assets/manage-assets.component';

export const Admin_ViewRoutes: Routes = [
    { path: 'admin',  component: AdminComponent },
    {path: 'manage-assets', component:ManageAssetsComponent},
    { path: '', redirectTo: 'admin', pathMatch: 'full' },
    { path: '**', redirectTo: 'admin' },
];
