import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
//import { AdminModule } from './admin/admin.module';
/*import { DashboardModule } from './dashboard/dashboard.module';
import { InicioModule } from './inicio/inicio.module';

import { ThemeModule } from '../@theme/theme.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';*/

const PAGES_COMPONENTS = [
  PagesComponent,
];

@NgModule({
  imports: [
    PagesRoutingModule,
    //AdminModule
    /*ThemeModule,
    DashboardModule,
    InicioModule,
    MiscellaneousModule,*/
  ],
  declarations: [
    ...PAGES_COMPONENTS,
  ],
})
export class PagesModule {
}
