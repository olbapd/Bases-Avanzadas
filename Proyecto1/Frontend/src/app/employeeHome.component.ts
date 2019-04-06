import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { asset } from './interfaces/assets_Structure';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RestApiService } from './services/client_service';
import { HttpClient } from 'selenium-webdriver/http';
import { MatDialog } from '@angular/material';
import { FotoService } from './services/foto.service';
import { FilterPipe } from 'src/app/services/filter.pipe';
import { FormBuilder, FormGroup, AbstractControl, Validators, FormControl } from '@angular/forms';

import { Ng2SearchPipeModule } from 'ng2-search-filter';


@Component({
    selector: 'home-employee',
    templateUrl: './employeeHome.component.html',
    styleUrls: ['./employeeHome.component.css']

})
export class HomeEmployeeComponent implements OnInit {

    searchText;
    activos: asset[] = [];//debe de inicializarse de lo contrario muestra vacio
    page = 1;
    pageSize = 4;


    get assets(): asset[] { //BIND TABLE

        return this.activos
            .map((activos, i) => ({ id: i + 1, ...activos }))
            .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
    }
    ngOnInit() {

        this.fillTable();
    }

    constructor(
        private modalService: NgbModal,
        public restApi: RestApiService,
        private router: Router) {

    }

    CerrarSesion() {
        this.router.navigate(['/auth/login']); //ruta a manage_assets si el login es exitoso

    }
    fillTable() {
        console.log("si");
        let option;
        this.restApi.getActivoXSede(1).subscribe((res) => {
            const myObjStr = JSON.stringify(res)
            const json = JSON.parse(myObjStr);
            var count = Object.keys(json.data).length;
            for (var _i = 0; _i < count; _i++) {
                this.activos.push({
                    "codigo": json.data[_i].Codigo,
                    "PorcentajeDepreciacion": json.data[_i].PorcentajeDepreciacion,
                    "precio": json.data[_i].Precio,
                    "ValorResidual": json.data[_i].ValorResidual,
                    "CentroCosto": json.data[_i].CentroCosto,
                    "Catname": json.data[_i].Categoria
                });
                console.log("this" + " " + this.activos);
            }
        });
    }

}