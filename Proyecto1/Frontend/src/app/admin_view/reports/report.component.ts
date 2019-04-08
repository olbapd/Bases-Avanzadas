import { Component, OnInit, OnDestroy } from '@angular/core';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { ChartType, ChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';
import { Router } from "@angular/router";
import {Chart} from 'chart.js';



@Component({
    selector:'report',
    templateUrl: './report.component.html',
    styleUrls: ['./report.component.css']

})
export class ReportComponent implements OnInit{
    constructor(private router: Router){
    }

    ngOnInit() {
 
    }
    generarReporte1(){}
    
    generarReporte2(){}
    
    generarReporte3(){}

}