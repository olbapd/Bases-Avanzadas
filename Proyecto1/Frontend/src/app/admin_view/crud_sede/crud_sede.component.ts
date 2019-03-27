import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RestApiService } from 'src/app/rest_client/client_service';
import { Router } from '@angular/router';
import { HttpClient } from 'selenium-webdriver/http';
import { Provincia } from 'src/app/interfaces/provincia';
import { Canton } from 'src/app/interfaces/canton';
import { Distrito } from 'src/app/interfaces/distrito';
import { Empleado } from 'src/app/interfaces/employee';
import { Categoria } from '../manage-assets/Categoria';
import { asset } from 'src/app/interfaces/assets_Structure';
import { sede } from 'src/app/interfaces/sede';
import {MatDialog, MatPaginator, MatSort, MatDialogConfig} from '@angular/material';
import { EmployeeComponent } from '../crud_employee/crud_employee.component';
import { updateComponent } from '../dialogs/update_employee/update-employee.component';

@Component({
    selector: 'crud-sede',
    templateUrl: './crud_sede.component.html',
    styleUrls: ['./crud_sede.component.css']
})
export class SedeComponent implements OnInit {
    provincia: Provincia[];
    canton: Canton[];
    distrito: Distrito[];
    empleado: Empleado[];

    categoria: Categoria[];
    page = 1;
    pageSize = 4;

    sedess: sede[] = [{
        name: "as",
        provincia:"cartago",
        distrito:"paraiso",
        canton:"paraiso",
        admin:"Pablo"
    }
    ];

    collectionSize = this.sedess.length;
    activo: asset;
    sede: sede;

    get sedes(): sede[] {
        return this.sedess
            .map((sede, i) => ({ id: i + 1, ...sede }))
            .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
    }

    constructor(private modalService: NgbModal, public restApi: RestApiService,
        private router: Router, private dialog:MatDialog) { }
    ngOnInit() { }

    prueba(){
        const dialogConfig=new MatDialogConfig();
        dialogConfig.disableClose=true;
        dialogConfig.width="60%";
        this.dialog.open(updateComponent,dialogConfig);
    

    }
}