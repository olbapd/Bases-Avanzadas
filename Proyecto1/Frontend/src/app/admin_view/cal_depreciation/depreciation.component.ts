import { Component, OnInit, PipeTransform } from "@angular/core";
import { templateJitUrl } from '@angular/compiler';
import { Router } from "@angular/router";
import { AdminComponent } from 'src/app/admin_view/admin/admin.component';
import { RestApiService } from 'src/app/services/client_service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { asset } from './../../interfaces/assets_Structure';
import { DecimalPipe } from '@angular/common';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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


    form: FormGroup;
    filter = new FormControl('');
    categoria;

    submitted = false;
    calculos: asset[] = [];

    isPopupOpened = false;

    constructor(private dialog: MatDialog, public calcular: Depreciation,
        private modalService: NgbModal, public restApi: RestApiService,
        private router: Router) { }

    ngOnInit() {

        this.form = new FormGroup({
            Cantidad: new FormControl('', Validators.required),
            Categoria2: new FormControl('', Validators.required)
        });

        this.CategoriaDropdown();
        
    }
    get f() { return this.form.controls; }


    firstMethod(T, B, VS) {
        this.isPopupOpened = true;
        const dialogRef = this.dialog.open(FirstMethodComponent, {
            data: [T, B, VS]
        });
    }

    secondMethod(T, B, VS) {
        this.isPopupOpened = true;
        const dialogRef = this.dialog.open(SecondMethodComponent, {
            data: [T, B, VS]
        });
    }

    CategoriaDropdown() {
        let option;
        let dropdown = document.getElementById('Categoria2-Dropdown');
        this.restApi.getCategorias().subscribe((res) => {
            const myObjStr = JSON.stringify(res)
            const json = JSON.parse(myObjStr);
            var count = Object.keys(json.data).length;
            for (var _i = 0; _i < count; _i++) {
                option = document.createElement('option');
                option.text = json.data[_i].Nombre;
                option.value = json.data[_i].IdCategoria;
                dropdown.append(option);
            }
        });;
    }

    onSubmit() {
        this.submitted = true;
        let btn = document.getElementById('registrar_btnD');
        if (this.form.invalid) {
            btn.setAttribute('class', 'btn btn-danger');
            return;
        }
        else {
            btn.setAttribute('class', 'btn btn-success');
            this.calculate() ;
        }
    }

    calculate() {
        this.calculos=[];
        let idEmpleado: number = parseInt(localStorage.getItem('IdEmpleado'));
        /*Tengo duda de si el valor del DropDown Categoria se tomará bien*/
        let categoria = this.form.get('Categoria2').value;
        this.restApi.getSedeXEmpleado(idEmpleado).subscribe((res) => {
            const myObjStr = JSON.stringify(res)
            const json = JSON.parse(myObjStr);
            const idSede = json.data[0].IdSede;

            this.restApi.getCalculosXSede(categoria,idSede).subscribe((res) => {
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
        });
    }

}