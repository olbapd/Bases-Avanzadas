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

    onNoClick(): void {
        this.dialogRef.close({ data: 'false' });
    }

    generarTabla(idEmpleado){
        this.calculate(idEmpleado);
    }
    
    calculate(idEmpleado2) {
        let idEmpleado=idEmpleado2;
        this.restApi.getSedeXEmpleado(idEmpleado).subscribe((res1) => {
            const myObjStr1 = JSON.stringify(res1)
            const json1 = JSON.parse(myObjStr1);
            const idSede = json1.data[0].IdSede;

            this.restApi.getActivoAsignEmpleado(idEmpleado).subscribe((res2) => {
                const myObjStr2 = JSON.stringify(res2)
                const json2 = JSON.parse(myObjStr2);
                this.restApi.getAllCostoInicialXEmpleado(idEmpleado).subscribe((res3) => {
                    const myObjStr3 = JSON.stringify(res3)
                    const json3 = JSON.parse(myObjStr3);
                    this.calculos.push(json3.data[0]);
                    this.restApi.getAllCostoInicialXEmpleadoProm(idEmpleado).subscribe((res4) => {
                        const myObjStr4 = JSON.stringify(res4)
                        const json4 = JSON.parse(myObjStr4);

                        this.calculos.push(json4.data[0]);
                        this.restApi.getAllValorResidualXEmpleado(idEmpleado).subscribe((res5) => {
                            const myObjStr5 = JSON.stringify(res5)
                            const json5 = JSON.parse(myObjStr5);
                            this.calculos.push(json5.data[0]);

                            this.restApi.getAllValorResidualXEmpleadoProm(idEmpleado).subscribe((res6) => {
                                const myObjStr6 = JSON.stringify(res6)
                                const json6 = JSON.parse(myObjStr6);
                                this.calculos.push(json6.data[0]);

                                this.restApi.getAllValorActivoActualXEmpleado(idEmpleado).subscribe((res7) => {
                                    const myObjStr7 = JSON.stringify(res7)
                                    const json7 = JSON.parse(myObjStr7);
                                    this.calculos.push(json7.data[0]);

                                    this.restApi.getAllValorActivoActualXEmpleadoProm(idEmpleado).subscribe((res8) => {
                                        const myObjStr8 = JSON.stringify(res8)
                                        const json8 = JSON.parse(myObjStr8);
                                        this.calculos.push(json8.data[0]);

                                        this.calculos = [{
                                            "activosAsignados": json2.data[0].ActivosAsignados,
                                            "costoInicial": json3.data[0].ActivosAsignados,
                                            "costoInicialProm": json4.data[0].ActivosAsignados,
                                            "valorResidual": json5.data[0].ActivosAsignados,
                                            "valorResidualProm": json6.data[0].ActivosAsignados,
                                            "valorActual": json7.data[0].ActivosAsignados,
                                            "valorActualProm": json8.data[0].ActivosAsignados
                                        }];
                                    });
                                });
                            });

                        });
                    });
                });
            });
        });
    }




}