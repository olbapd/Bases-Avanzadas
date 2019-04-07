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
  selector: 'admin-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']

})
export class DashboardComponent implements OnInit {


  public pieChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      position: 'top',
    },
    plugins: {
      datalabels: {
        formatter: (value, ctx) => {
          const label = ctx.chart.data.labels[ctx.dataIndex];
          return label;
        },
      },
    }
  };
  public pieChartLabels: Label[] = ['Asignado','No Asignado','Dar de Baja','Reparacion','Garantia'];
  public pieChartData: number[]=[];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [pluginDataLabels];
  public pieChartColors = [
    {
      backgroundColor: ['rgba(255,0,0,0.3)', 'rgba(0,255,0,0.3)',
       'rgba(0,0,255,0.3)', 'rgba(255,0,0,0.7)', 'rgba(255,255,0,1.0)'],
    },
  ];


  constructor(private dialog: MatDialog, public calcular: Depreciation,
    private modalService: NgbModal, public restApi: RestApiService,
    private router: Router) { }

  ngOnInit() {
    this.calculate();

  }

  CerrarSesion() {
    this.router.navigate(['/auth/login']); //ruta a manage_assets si el login es exitoso

  }
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

      this.restApi.getActivoStateBySede(0, idSede).subscribe((res) => {
        const myObjStr = JSON.stringify(res)
        const json = JSON.parse(myObjStr);
        var count = Object.keys(json.data).length;
        this.pieChartData.push(count);
      });

      this.restApi.getActivoStateBySede(1, idSede).subscribe((res) => {
        const myObjStr = JSON.stringify(res)
        const json = JSON.parse(myObjStr);
        var count = Object.keys(json.data).length;
        this.pieChartData.push(count);

        
      });


      this.restApi.getActivoStateBySede(2, idSede).subscribe((res) => {
        const myObjStr = JSON.stringify(res)
        const json = JSON.parse(myObjStr);
        var count = Object.keys(json.data).length;
        this.pieChartData.push(count);

        
      });


      this.restApi.getActivoStateBySede(3, idSede).subscribe((res) => {
        const myObjStr = JSON.stringify(res)
        const json = JSON.parse(myObjStr);
        var count = Object.keys(json.data).length;
        this.pieChartData.push(count);

        
      });


      this.restApi.getActivoStateBySede(4, idSede).subscribe((res) => {
        const myObjStr = JSON.stringify(res)
        const json = JSON.parse(myObjStr);
        var count = Object.keys(json.data).length;
        this.pieChartData.push(count);

        
      });

    });
  }

}



