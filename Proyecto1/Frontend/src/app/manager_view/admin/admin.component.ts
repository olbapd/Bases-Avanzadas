import { Component, OnInit, OnDestroy } from '@angular/core';
import { ChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';
import { Router } from "@angular/router";



@Component({
    selector:'app-admin',
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.css']

})
export class AdminComponent implements OnInit{

    constructor(private router: Router){

    }

    ngOnInit() {
    }

    CerrarSesion(){
        this.router.navigate(['/auth/login']); //ruta a manage_assets si el login es exitoso
    
      }
}