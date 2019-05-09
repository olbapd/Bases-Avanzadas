import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ReportRoutingModule, routedComponents } from './report-routing.module';
import { ReportService } from '../../services/report.service';
import { MaterialModule } from '../../app.module';

import { NgxChartsModule } from '@swimlane/ngx-charts';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ReportRoutingModule,
    MaterialModule,
    NgxChartsModule
  ],
  declarations: [
    ...routedComponents
  ],
  providers: [
    ReportService
  ],
})
export class ReportModule { }
