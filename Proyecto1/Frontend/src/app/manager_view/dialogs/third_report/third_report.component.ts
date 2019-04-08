import { Component, OnInit, Inject } from '@angular/core'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RestApiService } from 'src/app/services/client_service';
import { Router } from '@angular/router';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { updateComponent } from '../update_employee/update-employee.component';
import { Calculo } from 'src/app/interfaces/calculo';
import { Depreciation } from 'src/app/services/depreciation';
import { CalculoAThird } from 'src/app/interfaces/calculoAThird';
@Component({
    selector: 'third-report',
    templateUrl: './third_report.component.html',
    styleUrls: ['./third_report.component.css']
})

export class ThirdReportComponent implements OnInit {

    page = 1;
    pageSize = 4;
    calculos: CalculoAThird[] = [];//debe de inicializarse de lo contrario muestra vacio
    valores;
    constructor(public calcular: Depreciation, private modalService: NgbModal, public restApi: RestApiService,
        private router: Router, private dialogRef: MatDialogRef<updateComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {

    }

    get calc(): CalculoAThird[] { //BIND TABLE
        return this.calculos
            .map((calculos, i) => ({ id: i + 1, ...calculos }))
            .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
    }
    ngOnInit() {
    }

    onNoClick(): void {
        this.dialogRef.close({ data: 'false' });
    }

    calculate(Ano, VidaUtil) {
        let idEmpleado: number = parseInt(localStorage.getItem('IdEmpleado'));
        this.restApi.getSedeXEmpleado(idEmpleado).subscribe((res1) => {
            const myObjStr1 = JSON.stringify(res1)
            const json1 = JSON.parse(myObjStr1);
            const idSede = json1.data[0].IdSede;
            this.restApi.getAllDetalleActivoAsignXSede(idSede, Ano, VidaUtil).subscribe((res1) => {
                const myObjStr1 = JSON.stringify(res1)
                const json1 = JSON.parse(myObjStr1);
                const idSede = json1.data[0].IdSede;
                var count = Object.keys(json1.data).length;
                for (var _i = 0; _i < count; _i++) {
                    //let FechaIn = json.data[_i].FechaIngreso;
                    this.calculos.push({
                        "Codigo": json1.data[_i].Codigo,
                        "NombreActivo": json1.data[_i].Nombre[0],
                        "Precio": json1.data[_i].Precio,
                        "ValorResidual": json1.data[_i].ValorResidual,
                        "NombreCategoria": json1.data[_i].Nombre[1],
                        "FechaCompra": json1.data[_i].FechaCompra,
                        "VidaUtil": json1.data[_i].VidaUtil,
                        "NombreEmpleado": json1.data[_i].Nombre[2]
                    });
                }



            });
        });
    }

    onsubmit(VidaUtil,ano){
        this.calculate(ano,VidaUtil);
        

    }

}