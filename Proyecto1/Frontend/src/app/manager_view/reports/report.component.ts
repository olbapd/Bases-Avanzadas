import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
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
import { urls } from '../../config/constants';
import { DOCUMENT } from '@angular/common';

@Component({
    selector:'report',
    templateUrl: './report.component.html',
    styleUrls: ['./report.component.css']

})
export class ReportComponent implements OnInit{

    
    apiReportes = urls.reportUrl;

    isPopupOpened = false;
    constructor(@Inject(DOCUMENT) private document: any,private dialog: MatDialog, public calcular: Depreciation,
        private modalService: NgbModal, public restApi: RestApiService,
        private router: Router){
    }

    ngOnInit() {
 
    }
    generarReporte1(Fecha){
        console.log(Fecha);
        this.restApi.postBanco(Fecha)
            .subscribe((res)=>{
                console.log(res);
        });   
        this.document.location.href =this.apiReportes + '/Reports/report/Reporte1-Gerente';
    }
    
    generarReporte2(Fecha){

        this.restApi.postBanco(Fecha).subscribe((res)=>{
            console.log(res);
    });   ;   
        this.document.location.href = this.apiReportes + '/Reports/report/Reporte2-Gerente';
    }
    
    generarReporte3(Fecha){
        this.restApi.postBanco(Fecha).subscribe((res)=>{
            console.log(res);
    });   ;   
        this.document.location.href = this.apiReportes + '/Reports/report/Reporte3-Gerente';
    }

    generarReporte4(Fecha){
        this.restApi.postBanco(Fecha).subscribe((res)=>{
            console.log(res);
    });      
        this.document.location.href = this.apiReportes + '/Reports/report/Reporte4-Gerente';
    }

}