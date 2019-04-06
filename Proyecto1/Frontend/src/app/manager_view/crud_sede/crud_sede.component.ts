import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RestApiService } from 'src/app/services/client_service';
import { Router } from '@angular/router';
import { asset } from 'src/app/interfaces/assets_Structure';
import { sede } from 'src/app/interfaces/sede';
import { MatDialog, MatPaginator, MatSort, MatDialogConfig } from '@angular/material';
import { EmployeeComponent } from '../crud_employee/crud_employee.component';
import { updateComponent } from '../dialogs/update_employee/update-employee.component';
import { DeleteSedeComponent } from '../dialogs/delete_confirm_Sede/delete_confirmSede.component';
import { UpdateSedeComponent } from '../dialogs/update_sede/udpate-sede.component';
import { FormBuilder, FormGroup, AbstractControl, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'crud-sede',
  templateUrl: './crud_sede.component.html',
  styleUrls: ['./crud_sede.component.css']
})
export class SedeComponent implements OnInit {

  isPopupOpened = false;
  provincia;
  canton;
  distrito;
  empleado;
  categoria;
  page = 1;
  pageSize = 4;
  sedess: sede[] = [];
  collectionSize: number = 0;
  submitted = false;
  form: FormGroup;
  /*  collectionSize = this.sedess.length;
   activo: asset;
   sede: sede; */


  constructor(private modalService: NgbModal, public restApi: RestApiService,
    private router: Router, private dialog: MatDialog) { }
  ngOnInit() {
    this.form = new FormGroup({
      Nombre: new FormControl('', Validators.required),
      DetalleUbi: new FormControl('', Validators.required),
      Distrito: new FormControl('', Validators.required)
    });

    this.ProvinciaDropdown();
    this.Rsede();
  }

  get sedes(): sede[] { //BIND TABLE
    return this.sedess
      .map((sedess, i) => ({ id: i + 1, ...sedess }))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }
  get f() { return this.form.controls; }

  onSubmit() {
    this.submitted = true;
    let nombre = this.form.get('Nombre').value;
    let detalleu = this.form.get('DetalleUbi').value;
    let distrito = this.form.get('Distrito').value;
    // stop here if form is invalid
    let btn = document.getElementById('insertar_btn');
    if (this.form.invalid) {
      btn.setAttribute('class', 'btn btn-danger');
      return;
    }
    else {
      btn.setAttribute('class', 'btn btn-success');

      this.restApi.setSede(nombre, detalleu, distrito, 1).subscribe(res => {
        window.location.reload();
      });


    }
  }

  Rsede() {
    this.restApi.getAdminSedes().subscribe((res) => {
      const myObjStr = JSON.stringify(res)
      const json = JSON.parse(myObjStr);
      var count = Object.keys(json.data).length;
      this.collectionSize = count;
      for (var _i = 0; _i < count; _i++) {
        this.sedess.push({
          "id": json.data[_i].IdSede,
          "name": json.data[_i].Sede,
          "provincia": json.data[_i].Provincia,
          "canton": json.data[_i].Canton,
          "distrito": json.data[_i].Distrito,
          "apellido1": json.data[_i].Apellido1,
          "apellido2": json.data[_i].Apellido2,
          "nombre": json.data[_i].Nombre,
          "cedula": json.data[_i].Cedula
        });
      }
    });
  }
  updateSede(cedula, IdSede) {
    this.isPopupOpened = true;
    const dialogRef = this.dialog.open(UpdateSedeComponent, {
      data: {
        "cedula": cedula,
        "IdSede": IdSede
      }
    });
  }
  deleteSede(IdSede, nameSede) {
    this.isPopupOpened = true;
    const sede = this.sedess.findIndex(c => c.id === IdSede);
    const dialogRef = this.dialog.open(DeleteSedeComponent, {
      data: {
        "IdSede": IdSede,
        "Nombre": nameSede
      }
    }).afterClosed().subscribe(response => {
      if (response.data == "true") {
        console.log("entro");
        this.sedess.splice(sede, 1);
      }

    });
  }


  DistritoDropdown(IdCanton) {
    $("#Distrito-Dropdown").empty();
    let optionestado;
    let dropdown = document.getElementById('Distrito-Dropdown');
    this.restApi.getDistritos(IdCanton).subscribe((res) => {
      const myObjStr = JSON.stringify(res)
      const json = JSON.parse(myObjStr);
      var count = Object.keys(json.data).length;
      for (var _i = 0; _i < count; _i++) {
        optionestado = document.createElement('option');
        optionestado.text = json.data[_i].Nombre;
        optionestado.value = json.data[_i].IdDistrito;
        dropdown.append(optionestado);
      }
    });;
  }

  ProvinciaDropdown() {
    let optionestado;
    let dropdown = document.getElementById('Provincia-Dropdown');
    this.restApi.getProvincia().subscribe((res) => {
      const myObjStr = JSON.stringify(res)
      const json = JSON.parse(myObjStr);
      var count = Object.keys(json.data).length;
      for (var _i = 0; _i < count; _i++) {
        optionestado = document.createElement('option');
        optionestado.text = json.data[_i].Nombre;
        optionestado.value = json.data[_i].IdProvincia;
        dropdown.append(optionestado);
      }
    });;
  }


  CantonDropdown(IdProvincia) {
    $("#Canton-Dropdown").empty();
    let optionestado;
    let dropdown = document.getElementById('Canton-Dropdown');
    this.restApi.getCanton(IdProvincia).subscribe((res) => {
      const myObjStr = JSON.stringify(res)
      const json = JSON.parse(myObjStr);
      var count = Object.keys(json.data).length;
      for (var _i = 0; _i < count; _i++) {
        optionestado = document.createElement('option');
        optionestado.text = json.data[_i].Nombre;
        optionestado.value = json.data[_i].IdCanton;
        dropdown.append(optionestado);
      }
    });;
  }
}