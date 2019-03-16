import { Routes } from '@angular/router';


export const AppRoutes: Routes = [
    {
      path: '',
      redirectTo: 'regitser',
      pathMatch: 'full',
    }, /*{
      path: '',
      component: AdminLayoutComponent,
      children: [
         {
	        path: '',
	        loadChildren: './dashboard/dashboard.module#DashboardModule'
	    }, {
	        path: 'components',
	        loadChildren: './components/components.module#ComponentsModule'
	    }
  	]}, */
];
