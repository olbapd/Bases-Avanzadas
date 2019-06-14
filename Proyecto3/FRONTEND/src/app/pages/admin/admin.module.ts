import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { AdminComponent } from './admin.component';
import { AdminRoutingModule, routedComponents } from './admin-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AutocompleteComponent } from '../admin/manage_places/google-places.component';

@NgModule({
  imports: [
    AdminRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AutocompleteComponent,
  ],
  declarations: [
    ...routedComponents
  ],
  providers: [
  ]
})
export class AdminModule {
}
