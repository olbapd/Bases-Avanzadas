import { Component, OnInit, Inject } from '@angular/core'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RestApiService } from 'src/app/services/client_service';
import { Router } from '@angular/router';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { updateComponent } from '../update_employee/update-employee.component';
import { Calculo } from 'src/app/interfaces/calculo';
import { Depreciation } from 'src/app/services/depreciation';
import { freporte } from 'src/app/interfaces/freporte';
import { CalculoAFirst } from 'src/app/interfaces/calculoAFirst';
@Component({
    selector: 'first-report',
    templateUrl: './first_report.component.html',
    styleUrls: ['./first_report.component.css']
})

export class FirstReportComponent implements OnInit {

    page = 1;
    pageSize = 4;
    calculos: CalculoAFirst[] = [];//debe de inicializarse de lo contrario muestra vacio
    valores;
    constructor(public calcular: Depreciation, private modalService: NgbModal, public restApi: RestApiService,
        private router: Router, private dialogRef: MatDialogRef<updateComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {

    }

    ngOnInit() {
        this.calculate();
        console.log(this.calculos);

    }

    onNoClick(): void {
        this.dialogRef.close({ data: 'false' });
    }

    calculate() {
        let idEmpleado: number = parseInt(localStorage.getItem('IdEmpleado'));
        this.restApi.getSedeXEmpleado(idEmpleado).subscribe((res1) => {
            const myObjStr1 = JSON.stringify(res1)
            const json1 = JSON.parse(myObjStr1);
            const idSede = json1.data[0].IdSede;

            this.restApi.getAllActivoAsignXSede(idSede).subscribe((res2) => {
                const myObjStr2 = JSON.stringify(res2)
                const json2 = JSON.parse(myObjStr2);
                this.restApi.getAllCostoInicialXSede(idSede).subscribe((res3) => {
                    const myObjStr3 = JSON.stringify(res3)
                    const json3 = JSON.parse(myObjStr3);
                   
                    this.restApi.getAllValorResidualXSede(idSede).subscribe((res4) => {
                        const myObjStr4 = JSON.stringify(res4)
                        const json4 = JSON.parse(myObjStr4);

                        this.calculos.push(json4.data[0]);
                        this.restApi.getAllValorActivoActualXSede(idSede).subscribe((res5) => {
                            const myObjStr5 = JSON.stringify(res5)
                            const json5 = JSON.parse(myObjStr5);
                           
                            this.calculos = [{
                                "CantidadActivos": json2.data[0].ActivosAsignados,
                                "TotalCostoInicial": json3.data[0].SumaCostoInicial,
                                "TotalValorResidual": json4.data[0].SumaValorResidual,
                                "TotalValorLibros": json5.data[0].ValorEnLibros
                            }];
                        });
                    });
                });

            });
        });
    }



}