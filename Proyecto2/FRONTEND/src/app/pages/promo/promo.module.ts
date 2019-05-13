import { NgModule } from '@angular/core';
//import { Ng2SmartTableModule } from 'ng2-smart-table';

import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PromoRoutingModule, routedComponents } from './promo-routing.module';
import { MaterialModule } from '../../app.module';
import { FieldErrorDisplayComponent }  from './field-error-display/field-error-display.component';
import { PromoService } from '../../services/promo.service';
import { AdminService } from '../../services/admin.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PromoRoutingModule,
    MaterialModule
  ],
  declarations: [
    ...routedComponents,
    FieldErrorDisplayComponent
  ],
  providers: [
    PromoService,
    AdminService
  ],
})
export class PromoModule { }
