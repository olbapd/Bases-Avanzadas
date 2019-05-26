import { NgModule } from '@angular/core';
//import { Ng2SmartTableModule } from 'ng2-smart-table';

import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BookRoutingModule, routedComponents } from './book-routing.module';
import { MaterialModule } from '../../app.module';
import { FieldErrorDisplayComponent }  from './field-error-display/field-error-display.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { BookService } from '../../services/book.service';
import { AdminService } from '../../services/admin.service';
import { CatalogService } from '../../services/catalog.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BookRoutingModule,
    MaterialModule,
    Ng2SmartTableModule
  ],
  declarations: [
    ...routedComponents,
    FieldErrorDisplayComponent
  ],
  providers: [
    BookService,
    AdminService,
    CatalogService
  ],
})
export class BookModule { }
