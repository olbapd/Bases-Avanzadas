import { NgModule } from '@angular/core';
//import { Ng2SmartTableModule } from 'ng2-smart-table';

import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { OrderRoutingModule, routedComponents } from './order-routing.module';
import { MaterialModule } from '../../app.module';
import { FieldErrorDisplayComponent }  from './field-error-display/field-error-display.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { OrderService } from '../../services/order.service';
import { AdminService } from '../../services/admin.service';
import { CatalogService } from '../../services/catalog.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    OrderRoutingModule,
    MaterialModule,
    Ng2SmartTableModule
  ],
  declarations: [
    ...routedComponents,
    FieldErrorDisplayComponent
  ],
  providers: [
    OrderService,
    AdminService,
    CatalogService
  ],
})
export class OrderModule { }
