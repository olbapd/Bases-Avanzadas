import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RestApiService } from 'src/app/rest_client/client_service';
import { Router } from '@angular/router';
import { HttpClient } from 'selenium-webdriver/http';
import { Provincia } from 'src/app/interfaces/provincia';
import { Canton } from 'src/app/interfaces/canton';
import { Distrito } from 'src/app/interfaces/distrito';
import { Empleado } from 'src/app/interfaces/employee';
import { asset } from 'src/app/interfaces/assets_Structure';
import { sede } from 'src/app/interfaces/sede';
import { MatDialog, MatPaginator, MatSort, MatDialogConfig } from '@angular/material';
import { EmployeeComponent } from '../crud_employee/crud_employee.component';
import { updateComponent } from '../dialogs/update_employee/update-employee.component';
import { DeleteComponent } from '../dialogs/delete_confirm/delete_confirm.component';
import { UpdateSedeComponent } from '../dialogs/update_sede/udpate-sede.component';

@Component({
    selector: 'crud-sede',
    templateUrl: './crud_sede.component.html',
    styleUrls: ['./crud_sede.component.css']
})
export class SedeComponent implements OnInit {
    isPopupOpened = false;
    provincia: Provincia[];
    canton: Canton[];
    distrito: Distrito[];
    empleado: Empleado[];

    type = 1;
    categoria;
    page = 1;
    pageSize = 4;

    sedess: sede[] = [{
        name: "as",
        provincia: "cartago",
        distrito: "paraiso",
        canton: "paraiso",
        admin: "Pablo"
    }
    ];

    collectionSize = this.sedess.length;
    activo: asset;
    sede: sede;

    constructor(private modalService: NgbModal, public restApi: RestApiService,
        private router: Router, private dialog: MatDialog) { }
    ngOnInit() { }

    get sedes(): sede[] {
        return this.sedess
            .map((sede, i) => ({ id: i + 1, ...sede }))
            .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
    }



    updateSede() {
        this.isPopupOpened = true;
        const dialogRef = this.dialog.open(UpdateSedeComponent, {
            data: {}
        });
    }
    deleteSede() {
        this.isPopupOpened = true;
        const dialogRef = this.dialog.open(DeleteComponent, {
            data: {}
        });
    }

    add_sede(name, code, description, provincia, canton, distrito, estado, employee, fecha_ingreso) {

    }
}