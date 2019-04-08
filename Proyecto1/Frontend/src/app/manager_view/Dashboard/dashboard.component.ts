import { Component, OnInit, OnDestroy } from '@angular/core';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { ChartType, ChartOptions, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { Router } from "@angular/router";
import { Chart } from 'chart.js';
import { MatDialog } from '@angular/material';
import { Depreciation } from 'src/app/services/depreciation';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RestApiService } from 'src/app/services/client_service';

@Component({
  selector: 'manager-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']

})

export class DashboardComponent implements OnInit {
  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{}] },
  };
  public barChartLabels: Label[] = ['Empleados', 'Sede', 'Puesto', 'Departamento'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public valores:number[]=[];
  public barChartData: ChartDataSets[] = [
    { data: this.valores, label: '' },
  ];

  public pieChartColors = [
    {
      backgroundColor: ['rgba(0,255,255,1.0)', 'rgba(0,0,255,1.0)',
       'rgba(0,0,255,0.3)', 'rgba(0,128,128,1.0)', 'rgba(255,255,0,1.0)'],
    },
  ];

  constructor(private dialog: MatDialog, public calcular: Depreciation,
    private modalService: NgbModal, public restApi: RestApiService,
    private router: Router) {

  }

  ngOnInit() {
    this.calculate();

  }

  CerrarSesion() {
    this.router.navigate(['/auth/login']); //ruta a manage_assets si el login es exitoso

  }

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }


  calculate() {
    let idEmpleado: number = parseInt(localStorage.getItem('IdEmpleado'));
    this.restApi.getSedeXEmpleado(idEmpleado).subscribe((res) => {
      const myObjStr = JSON.stringify(res)
      const json = JSON.parse(myObjStr);
      const idSede = json.data[0].IdSede;

      this.restApi.getEmpleados().subscribe((res) => {
        const myObjStr = JSON.stringify(res)
        const json = JSON.parse(myObjStr);
        var count = Object.keys(json.data).length;
        this.valores.push(count);
      });

      this.restApi.getSedes().subscribe((res) => {
        const myObjStr = JSON.stringify(res)
        const json = JSON.parse(myObjStr);
        var count = Object.keys(json.data).length;
        this.valores.push(count);

        
      });


      this.restApi.getPuesto().subscribe((res) => {
        const myObjStr = JSON.stringify(res)
        const json = JSON.parse(myObjStr);
        var count = Object.keys(json.data).length;
        this.valores.push(count);

        
      });


      this.restApi.getDepartamento().subscribe((res) => {
        const myObjStr = JSON.stringify(res)
        const json = JSON.parse(myObjStr);
        var count = Object.keys(json.data).length;
        this.valores.push(count);

        
      });

    });
  }









}