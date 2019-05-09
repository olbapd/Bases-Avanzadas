import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReportComponent } from './report.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [{
  path: '',
  component: ReportComponent,
  children: [
    {
      path: 'admin',
      component: AdminComponent,
    },{
      path: '',
      redirectTo: 'admin',
      pathMatch: 'full',
    }, {
      path: '**',
      redirectTo: 'admin',
      pathMatch: 'full',
    }    
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReportRoutingModule { }

export const routedComponents = [
  ReportComponent,
  AdminComponent
];
