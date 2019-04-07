import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RestApiService } from 'src/app/services/client_service';
import { HttpClient } from '@angular/common/http';
import { sede } from '../../interfaces/sede';
import { department } from '../../interfaces/department';
import { jobs } from '../../interfaces/jobs';
import { asset } from 'src/app/interfaces/assets_Structure';
import { Empleado } from 'src/app/interfaces/employee';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { updateComponent } from '../dialogs/update_employee/update-employee.component';
import { DeleteComponent } from '../dialogs/delete_confirm/delete_confirm.component';
import { FormBuilder, FormGroup, AbstractControl, Validators, FormControl } from '@angular/forms';
import { FotoService } from '../../services/foto.service';
import { FilterPipe } from 'src/app/services/filter.pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { formatDate } from '@angular/common';



@Component({
    selector: 'crud-employee',
    templateUrl: './crud_employee.component.html',
    styleUrls: ['./crud_employee.component.css']
})

export class EmployeeComponent implements OnInit {
    searchText;
    photo: any;
    isPopupOpened = false;
    submitted = false;
    sede;
    estado;
    puestos: jobs[];
    departamento: department[];
    selectedFile: File = null;
    type = 1;
    page = 1;
    pageSize = 4;

    empleados: Empleado[] = [];//debe de inicializarse de lo contrario muestra vacio
    collectionSize: number = 0;

    form: FormGroup;
    constructor(private fb: FormBuilder,
        private modalService: NgbModal,
        public restApi: RestApiService,
        private router: Router,
        private http: HttpClient,
        private dialog: MatDialog,
        private fotoService: FotoService) {
        this.photo = "";

    }
    get employees(): Empleado[] { //BIND TABLE

        return this.empleados
            .map((empleados, i) => ({ id: i + 1, ...empleados }))
            .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
    }
    get f() { return this.form.controls; }
    ngOnInit() {
        this.form = new FormGroup({
            Nombre: new FormControl('', Validators.required),
            Apellido1: new FormControl('', Validators.required),
            Apellido2: new FormControl('', Validators.required),
            Cedula: new FormControl('', Validators.required),
            Correo: new FormControl('', [Validators.required, Validators.email]),
            Contrasena: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(10)]),
            FechaN: new FormControl('', Validators.required),
            Departamento: new FormControl('', Validators.required),
            Puesto: new FormControl('', Validators.required)
            /* Sede: new FormControl('', Validators.required) */


        });
        this.Remployees();
        this.dep_DropDown();
        this.puesto_DropDown();
        this.sedes_DropDown();


    }

    onSubmit() {
        this.submitted = true;
        let nombre = this.form.get('Nombre').value;
        let apellido1 = this.form.get('Apellido1').value;
        let apellido2 = this.form.get('Apellido1').value;
        let cedula = this.form.get('Cedula').value;
        let FechaN = this.form.get('FechaN').value;
        let correo = this.form.get('Correo').value;
        let contrasena = this.form.get('Contrasena').value;
        let departamento = this.form.get('Departamento').value;
        let puesto = this.form.get('Puesto').value;

        // stop here if form is invalid
        let btn = document.getElementById('registrar_btn');
        if (this.form.invalid) {
            btn.setAttribute('class', 'btn btn-danger');
            return;
        }
        else {
            btn.setAttribute('class', 'btn btn-success');
            //Se debe almacenar la imagen primero
            this.fotoService.uploadFile(this.photo)
                .subscribe((data) => {
                    let photoHash = (data && data.hash) ? data.hash : null;
                    console.log(photoHash);
                    let idEmpleado: number = parseInt(localStorage.getItem('IdEmpleado'));
                    this.restApi.getSedeXEmpleado(idEmpleado).subscribe((res) => {
                        const myObjStr = JSON.stringify(res)
                        const json = JSON.parse(myObjStr);
                        this.restApi.setEmpleado(nombre, apellido1, apellido2, cedula, FechaN, correo, contrasena, departamento, puesto, photoHash, json.data[0].IdSede, formatDate(new Date(), 'yyyy-MM-dd', 'en')).subscribe(res => {

                        });
                    });
                });
        }
    }

    sedes_DropDown() {
        let option;
        let dropdowndep = document.getElementById('SedeDropdown');
        this.restApi.getSedes().subscribe((res) => {
            const myObjStr = JSON.stringify(res)
            const json = JSON.parse(myObjStr);
            var count = Object.keys(json.data).length;
            for (var _i = 0; _i < count; _i++) {
                option = document.createElement('option');
                option.text = json.data[_i].Nombre;
                option.value = json.data[_i].IdSede;
                dropdowndep.append(option);
            }
        });
    }

    dep_DropDown() {
        let option;
        let dropdowndep = document.getElementById('dep-Dropdown');
        this.restApi.getDepartamento().subscribe((res) => {
            const myObjStr = JSON.stringify(res)
            const json = JSON.parse(myObjStr);
            var count = Object.keys(json.data).length;
            for (var _i = 0; _i < count; _i++) {
                option = document.createElement('option');
                option.text = json.data[_i].Nombre;
                option.value = json.data[_i].IdDepartamento;
                dropdowndep.append(option);
            }
        });
    }

    puesto_DropDown() {
        let option;
        let dropdowndep = document.getElementById('puesto-Dropdown');
        this.restApi.getPuesto().subscribe((res) => {
            const myObjStr = JSON.stringify(res)
            const json = JSON.parse(myObjStr);
            var count = Object.keys(json.data).length;
            for (var _i = 0; _i < count; _i++) {
                option = document.createElement('option');
                option.text = json.data[_i].Nombre;
                option.value = json.data[_i].IdPuesto;
                dropdowndep.append(option);
            }
        });
    }

    Remployees() {
        let idEmpleado: number = parseInt(localStorage.getItem('IdEmpleado'));
        this.restApi.getSedeXEmpleado(idEmpleado).subscribe((res) => {
            const myObjStr = JSON.stringify(res)
            const json = JSON.parse(myObjStr);
            const idSede = json.data[0].IdSede;

            this.restApi.getEmpleadosXSede(idSede).subscribe((res) => {
                const myObjStr = JSON.stringify(res)
                const json = JSON.parse(myObjStr);
                var count = Object.keys(json.data).length;
                this.collectionSize = count;
                for (var _i = 0; _i < count; _i++) {
                    let FechaIn = json.data[_i].FechaIngreso;
                    this.empleados.push({
                        "cedula": json.data[_i].Cedula,
                        "apellido1": json.data[_i].Apellido1,
                        "apellido2": json.data[_i].Apellido2,
                        "nombre": json.data[_i].Nombre[0],
                        "departamento": json.data[_i].Nombre[1],
                        "puesto": json.data[_i].Nombre[2],
                        "fechaIn": FechaIn.substring(0, 10),
                        "correo": json.data[_i].Correo,
                        "contrasena": json.data[_i].Contrasena,
                        "foto": json.data[_i].Foto

                    });
                }

            });
        });

    }

    deleteEmployee(id, apellido1, apellido2, nombre) {
        let empl
        localStorage.setItem('Cedula', id);
        this.isPopupOpened = true;
        const employee = this.empleados.findIndex(c => c.cedula === id);

        const dialogRef = this.dialog.open(DeleteComponent, {
            data: {
                "cedula": id,
                "apellido1": apellido1,
                "apellido2": apellido2,
                "nombre": nombre
            }
        }).afterClosed().subscribe(response => {
            if (response.data == "true") {
                console.log("entro");
                this.empleados.splice(employee, 1);
            }

        });

    }


    updateEmployee(cedula, departamento, puesto, correo, contrasena, foto) {
        this.restApi.getIdEmpleado(cedula).subscribe((resE) => {
            const myObjStrE = JSON.stringify(resE)
            const jsonE = JSON.parse(myObjStrE);
            this.restApi.getSedeXEmpleado(jsonE.data[0].IdEmpleado).subscribe((resS) => {
                const myObjStrS = JSON.stringify(resS)
                const jsonS = JSON.parse(myObjStrS);


                this.restApi.getIdDepartamento(departamento).subscribe((resD) => {
                    this.restApi.getIdPuesto(puesto).subscribe((resP) => {
                        const myObjStrD = JSON.stringify(resD)
                        const jsonD = JSON.parse(myObjStrD);
                        const myObjStrP = JSON.stringify(resP)
                        const jsonP = JSON.parse(myObjStrP);
                        this.isPopupOpened = true;
                        const dialogRef = this.dialog.open(updateComponent, {
                            data: {
                                "Cedula": cedula,
                                "Departamento":departamento,
                                "IdDepartamento": jsonD.data[0].IdDepartamento,
                                "Puesto": puesto,
                                "IdPuesto":jsonP.data[0].IdPuesto,
                                "Correo": correo,
                                "Contrasena": contrasena,
                                "Foto": foto,
                                "IdSede": jsonS.data[0].IdSede
                            }
                        });

                    });

                });;
            });
        });



    }

    onPhotoChange(event) {
        this.photo = event.target.files[0];
        this.fotoService.uploadFile(this.photo)
        .subscribe((data) => {
            let photoHash = (data && data.hash) ? data.hash : null;
            console.log(photoHash);
            let img_load = document.getElementById('img');
           let photo_load = this.fotoService.downloadFile(photoHash);
            img_load.setAttribute('src',photo_load)
            
                });
    }
}