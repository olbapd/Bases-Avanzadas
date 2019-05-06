import { NgModule } from '@angular/core';
//import { Ng2SmartTableModule } from 'ng2-smart-table';

import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AdminRoutingModule, routedComponents } from './admin-routing.module';
import { AdminService } from '../../services/admin.service';
import { MaterialModule } from '../../app.module';
import { FieldErrorDisplayComponent }  from './field-error-display/field-error-display.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AdminRoutingModule,
    MaterialModule,
    
  ],
  declarations: [
    ...routedComponents,
    FieldErrorDisplayComponent
  ],
  providers: [
    AdminService
  ],
})
export class AdminModule { }
