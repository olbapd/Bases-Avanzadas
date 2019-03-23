import { Component, OnInit, OnDestroy } from '@angular/core';
import { ChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';



@Component({
    selector:'app-admin',
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.css']

})
export class AdminComponent implements OnInit{
    public collection = ["1","1","1"];

    constructor(){

    }

    ngOnInit() {
    }
}