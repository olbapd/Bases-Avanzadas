import { Component, OnInit, Inject } from '@angular/core'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RestApiService } from 'src/app/services/client_service';
import { Router } from '@angular/router';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { updateComponent } from '../update_employee/update-employee.component';
import { Calculo } from 'src/app/interfaces/calculo';
import { Depreciation } from 'src/app/services/depreciation';
import { freporte } from 'src/app/interfaces/freporte';
@Component({
    selector: 'first-report',
    templateUrl: './first_report.component.html',
    styleUrls: ['./first_report.component.css']
})

export class FirstReportComponent  implements OnInit {

    page = 1;
    pageSize = 4;
    calculos: number[] = [];//debe de inicializarse de lo contrario muestra vacio
    valores;
    constructor(public calcular: Depreciation, private modalService: NgbModal, public restApi: RestApiService,
        private router: Router, private dialogRef: MatDialogRef<updateComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {

    }

    ngOnInit() {

    }

    onNoClick(): void {
        this.dialogRef.close({ data: 'false' });
    }

    calculate() {
        let idEmpleado: number = parseInt(localStorage.getItem('IdEmpleado'));
        this.restApi.getSedeXEmpleado(idEmpleado).subscribe((res) => {
            const myObjStr = JSON.stringify(res)
            const json = JSON.parse(myObjStr);
            const idSede = json.data[0].IdSede;

            this.restApi.getAllActivoAsignXSede(idSede).subscribe((res) => {
                const myObjStr = JSON.stringify(res)
                const json = JSON.parse(myObjStr);
                var count = Object.keys(json.data);
                this.calculos.push(json.data[0]);
            });


            this.restApi.getAllCostoInicialXSede(idSede).subscribe((res) => {
                const myObjStr = JSON.stringify(res)
                const json = JSON.parse(myObjStr);
                var count = Object.keys(json.data);
                this.calculos.push(json.data[0]);
            });


            this.restApi.getAllValorResidualXSede(idSede).subscribe((res) => {
                const myObjStr = JSON.stringify(res)
                const json = JSON.parse(myObjStr);
                var count = Object.keys(json.data);
                this.calculos.push(json.data[0]);
            });
            this.restApi.getAllValorActivoActualXSede(idSede).subscribe((res) => {
                const myObjStr = JSON.stringify(res)
                const json = JSON.parse(myObjStr);
                var count = Object.keys(json.data);
                this.calculos.push(json.data[0]);
            });

        });
    }



}