import { Component, OnInit, Inject } from '@angular/core'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RestApiService } from 'src/app/services/client_service';
import { Router } from '@angular/router';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { updateComponent } from '../update_employee/update-employee.component';
import { Calculo } from 'src/app/interfaces/calculo';
import { Depreciation } from 'src/app/services/depreciation';
@Component({
    selector: 'first-method',
    templateUrl: './first-method.component.html',
    styleUrls: ['./first-method.component.css']
})

export class FirstMethodComponent implements OnInit {

    page = 1;
    pageSize = 4;
    calculos: Calculo[] = [];//debe de inicializarse de lo contrario muestra vacio
    valores;
    constructor(public calcular: Depreciation, private modalService: NgbModal, public restApi: RestApiService,
        private router: Router, private dialogRef: MatDialogRef<updateComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {

    }

    get employees(): Calculo[] { //BIND TABLE

        return this.calculos
            .map((calculos, i) => ({ id: i + 1, ...calculos }))
            .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
    }
    ngOnInit() {
        this.valores = this.calcular.straightLine(this.data[0], this.data[1], this.data[2]);
        for (var _i = 0; _i < this.data[0]; _i++) {
            this.calculos.push({
                "t": _i,
                "acumulada": (_i * this.calcular.getDep(this.data[0], this.data[1], this.data[2])),
                "valor": this.data[1] - (_i * this.calcular.getDep(this.data[0], this.data[1], this.data[2]))
            });
        }
    }

    onNoClick(): void {
        this.dialogRef.close({ data: 'false' });
    }



}