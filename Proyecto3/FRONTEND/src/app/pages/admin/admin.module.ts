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
<<<<<<< HEAD
    ReactiveFormsModule
=======
    ReactiveFormsModule,
    AutocompleteComponent
>>>>>>> a564ad3f5128a45485d00c48ca23565bf63ed7ff
  ],
  declarations: [
    ...routedComponents
  ],
  providers: [
  ]
})
export class AdminModule {
}
