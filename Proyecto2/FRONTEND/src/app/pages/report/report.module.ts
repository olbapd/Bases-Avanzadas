import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { ReportRoutingModule, routedComponents } from './report-routing.module';
import { ReportService } from '../../services/report.service';
import { OrderService }  from '../../services/order.service';
import { CatalogService }  from '../../services/catalog.service';

import { MaterialModule } from '../../app.module';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ReportRoutingModule,
    MaterialModule,
    NgxChartsModule,
    Ng2SmartTableModule
  ],
  declarations: [
    ...routedComponents
  ],
  providers: [
    ReportService,
    OrderService,
    CatalogService
  ],
})
export class ReportModule { }
