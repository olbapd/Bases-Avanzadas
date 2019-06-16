import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { ClientComponent } from './client.component';
import { ClientRoutingModule, routedComponents } from './client-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HistoryService } from '../../services/history.service'; 
import { Ng2SmartTableModule } from 'ng2-smart-table';
@NgModule({
  imports: [
    ClientRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SmartTableModule
  ],
  declarations: [
    ...routedComponents
  ],
  providers: [
    HistoryService
  ]
})
export class ClientModule {
}
