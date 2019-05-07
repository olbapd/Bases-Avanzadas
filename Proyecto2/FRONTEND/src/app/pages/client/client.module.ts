import { NgModule } from '@angular/core';
//import { Ng2SmartTableModule } from 'ng2-smart-table';

import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ClientRoutingModule, routedComponents } from './client-routing.module';
import { ClientService } from '../../services/client.service';
import { MaterialModule } from '../../app.module';
import { FieldErrorDisplayComponent }  from './field-error-display/field-error-display.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ClientRoutingModule,
    MaterialModule
  ],
  declarations: [
    ...routedComponents,
    FieldErrorDisplayComponent
  ],
  providers: [
    ClientService
  ],
})
export class ClientModule { }
