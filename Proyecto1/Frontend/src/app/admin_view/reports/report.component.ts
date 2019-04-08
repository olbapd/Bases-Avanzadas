import { Component, OnInit, OnDestroy } from '@angular/core';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { ChartType, ChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';
import { Router } from "@angular/router";
import {Chart} from 'chart.js';
import { FirstReportComponent } from '../dialogs/first_report/first_report.component';

import { ThirdReportComponent } from '../dialogs/third_report/third_report.component';
import { MatDialog } from '@angular/material';
import { Depreciation } from 'src/app/services/depreciation';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RestApiService } from 'src/app/services/client_service';
import { SecondReportComponent } from '../dialogs/second_report/second_report.component';



@Component({
    selector:'report',
    templateUrl: './report.component.html',
    styleUrls: ['./report.component.css']

})
export class ReportComponent implements OnInit{

    

    isPopupOpened = false;
    constructor(private dialog: MatDialog, public calcular: Depreciation,
        private modalService: NgbModal, public restApi: RestApiService,
        private router: Router){
    }

    ngOnInit() {
 
    }
    generarReporte1(){
        this.isPopupOpened = true;
        const dialogRef = this.dialog.open(FirstReportComponent, {
            data: {}
        });
    }
    
    generarReporte2(){

        this.isPopupOpened = true;
        const dialogRef = this.dialog.open(SecondReportComponent, {
            data: {}
        });
    }
    
    generarReporte3(){
        this.isPopupOpened = true;
        const dialogRef = this.dialog.open(ThirdReportComponent, {
            data: {}
        });
    }

}