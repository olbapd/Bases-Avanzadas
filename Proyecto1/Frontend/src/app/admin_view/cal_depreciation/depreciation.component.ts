import { Component, OnInit, PipeTransform } from "@angular/core";
import { templateJitUrl } from '@angular/compiler';
import { Router } from "@angular/router";
import { AdminComponent } from 'src/app/admin_view/admin/admin.component';
import { RestApiService } from 'src/app/services/client_service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { asset } from './../../interfaces/assets_Structure';
import { DecimalPipe } from '@angular/common';
import { FormControl } from '@angular/forms';

import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { Depreciation } from 'src/app/services/depreciation';
import { MatDialog } from '@angular/material';
import { FirstMethodComponent } from '../dialogs/first_method/first-method.component';
import { SecondMethodComponent } from '../dialogs/second_method/second-method.component';



@Component({
    selector: 'cal-depreciation',
    templateUrl: './depreciation.component.html',
    styleUrls: ['./depreciation.component.css'],
    providers: [DecimalPipe]

})
export class DepreciationComponent implements OnInit {
    ngOnInit(): void {
        this.calculate();
        console.log("siiiiiiii");
    }

    filter = new FormControl('');

    calType = ["Lineal", "Suma de Digitos"];
    categoria;

    calculos: asset[] = [];
    
    isPopupOpened = false;

    constructor(
        private dialog: MatDialog,public calcular: Depreciation, 
         private modalService: NgbModal, public restApi: RestApiService,
         private router: Router) {}
    
    calculate() {
        console.log("si");
        let option;
        this.restApi.getCalculos(1).subscribe((res) => {
            const myObjStr = JSON.stringify(res)
            const json = JSON.parse(myObjStr);
            var count = Object.keys(json.data).length;
            for (var _i = 0; _i < count; _i++) {
                this.calculos.push({
                    "codigo": json.data[_i].Codigo,
                    "PorcentajeDepreciacion": json.data[_i].PorcentajeDepreciacion,
                    "precio": json.data[_i].Precio,
                    "ValorResidual": json.data[_i].ValorResidual,
                    "CentroCosto": json.data[_i].CentroCosto
                });
                console.log("this" + " " + this.calculos);
            }
        });
    }
    firstMethod(T,B,VS) {
        this.isPopupOpened = true;
        const dialogRef = this.dialog.open(FirstMethodComponent, {
            data: [T,B,VS]
        });
    }

    secondMethod(T,B,VS) {
        this.isPopupOpened = true;
        const dialogRef = this.dialog.open(SecondMethodComponent, {
            data: [T,B,VS]
        });
    }





}