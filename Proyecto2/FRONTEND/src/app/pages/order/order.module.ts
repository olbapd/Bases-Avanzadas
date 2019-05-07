import { NgModule } from '@angular/core';
//import { Ng2SmartTableModule } from 'ng2-smart-table';

import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { OrderRoutingModule, routedComponents } from './order-routing.module';
import { OrderService } from '../../services/order.service';
import { MaterialModule } from '../../app.module';
import { FieldErrorDisplayComponent }  from './field-error-display/field-error-display.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    OrderRoutingModule,
    MaterialModule
  ],
  declarations: [
    ...routedComponents,
    FieldErrorDisplayComponent
  ],
  providers: [
    OrderService
  ],
})
export class OrderModule { }
