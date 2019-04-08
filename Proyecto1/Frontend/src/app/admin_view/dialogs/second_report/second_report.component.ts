import { Component, OnInit, Inject } from '@angular/core'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RestApiService } from 'src/app/services/client_service';
import { Router } from '@angular/router';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { updateComponent } from '../update_employee/update-employee.component';
import { Calculo } from 'src/app/interfaces/calculo';
import { Depreciation } from 'src/app/services/depreciation';
import { sreporte } from 'src/app/interfaces/sreporte';
@Component({
    selector: 'second-report',
    templateUrl: './second_report.component.html',
    styleUrls: ['./second_report.component.css']
})

export class SecondReportComponent implements OnInit {

    page = 1;
    pageSize = 4;
    calculos: sreporte[] = [];//debe de inicializarse de lo contrario muestra vacio
    valores;
    constructor(public calcular: Depreciation, private modalService: NgbModal, public restApi: RestApiService,
        private router: Router, private dialogRef: MatDialogRef<updateComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {

    }

    ngOnInit() {

    }
    get calc(): sreporte[] { //BIND TABLE
        return this.calculos
            .map((calculos, i) => ({ id: i + 1, ...calculos }))
            .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
    }

    onNoClick(): void {
        this.dialogRef.close({ data: 'false' });
    }

    generarTabla(idEmpleado){
        this.calculate(idEmpleado);
    }
    
    calculate(idEmpleado2) {
        let idEmpleado=idEmpleado2;
      

            this.restApi.getActivoAsignEmpleado(idEmpleado).subscribe((res2) => {
                const myObjStr2 = JSON.stringify(res2)
                const json2 = JSON.parse(myObjStr2);
                this.restApi.getAllCostoInicialXEmpleado(idEmpleado).subscribe((res3) => {
                    const myObjStr3 = JSON.stringify(res3)
                    const json3 = JSON.parse(myObjStr3);
                  
                    this.restApi.getAllCostoInicialXEmpleadoProm(idEmpleado).subscribe((res4) => {
                        const myObjStr4 = JSON.stringify(res4)
                        const json4 = JSON.parse(myObjStr4);

                
                        this.restApi.getAllValorResidualXEmpleado(idEmpleado).subscribe((res5) => {
                            const myObjStr5 = JSON.stringify(res5)
                            const json5 = JSON.parse(myObjStr5);
                            

                            this.restApi.getAllValorResidualXEmpleadoProm(idEmpleado).subscribe((res6) => {
                                const myObjStr6 = JSON.stringify(res6)
                                const json6 = JSON.parse(myObjStr6);
                                

                                this.restApi.getAllValorActivoActualXEmpleado(idEmpleado).subscribe((res7) => {
                                    const myObjStr7 = JSON.stringify(res7)
                                    const json7 = JSON.parse(myObjStr7);
                                    

                                    this.restApi.getAllValorActivoActualXEmpleadoProm(idEmpleado).subscribe((res8) => {
                                        const myObjStr8 = JSON.stringify(res8)
                                        const json8 = JSON.parse(myObjStr8);
                                        

                                        this.calculos = [{
                                            "activosAsignados": json2.data[0].ActivosAsignados,
                                            "costoInicial": json3.data[0].SumaCostoInicial,
                                            "costoInicialProm": json4.data[0].CostoInicialProm,
                                            "valorResidual": json5.data[0].SumaValorResidual,
                                            "valorResidualProm": json6.data[0].SumValorR,
                                            "valorActual": json7.data[0].ValorEnLibros,
                                            "valorActualProm": json8.data[0].ValorEnLibrosProm
                                        }];
                                    });
                                });
                            });

                        });
                    });
                });
            });
    }




}