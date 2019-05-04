import { NgModule } from '@angular/core';
//import { Ng2SmartTableModule } from 'ng2-smart-table';

import { AdminRoutingModule, routedComponents } from './admin-routing.module';
import { AdminService } from '../../services/admin.service';

@NgModule({
  imports: [
    AdminRoutingModule,
    //Ng2SmartTableModule,
  ],
  declarations: [
    ...routedComponents,
  ],
  providers: [
    AdminService
  ],
})
export class AdminModule { }
