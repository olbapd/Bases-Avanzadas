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


@Component({
    selector: 'crud-employee',
    templateUrl: './crud_employee.component.html',
    styleUrls: ['./crud_employee.component.css']
})

export class EmployeeComponent implements OnInit {
    photo: any;
    isPopupOpened = false;
    sede;
    estado;
    puestos: jobs[];
    departamento: department[];
    selectedFile: File = null;
    type = 0;
    page = 1;
    pageSize = 4;
    empleados: Empleado[]=[];//debe de inicializarse de lo contrario muestra vacio
/* 
    categoria;
    page = 1;
    pageSize = 4;
    activos: asset[] = [{
        name: "as",
        code: 123,
        depreciation: 123
    }
    ];
    collectionSize = this.activos.length;
    activo: asset;
    empleado: Empleado; */
    form: FormGroup;

    get employees(): Empleado[] {
        return this.empleados.map((empleados, i) => ({ id: i + 1, ...empleados})).slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
    }

    Remployees(){
        let idEmpleado:number=parseInt(localStorage.getItem('IdEmpleado'));
        this.restApi.getSedeXEmpleado(idEmpleado).subscribe((res)=>{
            const myObjStr = JSON.stringify(res)
            const json = JSON.parse(myObjStr);
            const idSede=json.data[0].IdSede;
            this.restApi.getEmpleadosXSede(idSede).subscribe((res)=>{
                const myObjStr = JSON.stringify(res)
                const json = JSON.parse(myObjStr);
                var count = Object.keys(json.data).length;
                for (var _i = 0; _i < count; _i++) {
                    this.empleados.push({
                        "cedula":json.data[_i].Cedula,
                        "apellido1":json.data[_i].Apellido1,
                        "apellido2":json.data[_i].Apellido2,
                        "nombre":json.data[_i].Nombre[0],
                        "departamento":json.data[_i].Nombre[1],
                        "puesto":json.data[_i].Nombre[2],
                        "fechaIn":json.data[_i].FechaIngreso
                     });
                 }
             });
         });
        
    }
    onFileSelected(event) {
        this.selectedFile = <File>event.target.files[0];
    }

    onUpload() {
        const fd = new FormData();
        fd.append('image', this.selectedFile, this.selectedFile.name);
        this.http.post('http://API/REST', fd).subscribe(res => {
            console.log(res);
        });

    }

    constructor(private fb: FormBuilder,
                private modalService: NgbModal,
                public restApi: RestApiService,
                private router: Router,
                private http: HttpClient,
                private dialog: MatDialog,
                private fotoService: FotoService) {
        this.photo="";

    }
    ngOnInit() {
        this.form = new FormGroup({
           Nombre: new FormControl('', Validators.required),
           Apellido1: new FormControl('', Validators.required),
           Apellido2: new FormControl('', Validators.required),
           Cedula: new FormControl('', Validators.required),
           Correo: new FormControl('', [Validators.required, Validators.email]),
           Contraseña: new FormControl('', [Validators.required, Validators.minLength(8)])

        });
       this.Remployees();
    }

    deleteEmployee() {
        this.isPopupOpened = true;
        const dialogRef = this.dialog.open(DeleteComponent, {
            data: {}
        });
    }

    
    updateEmployee() {
        this.isPopupOpened = true;
        const dialogRef = this.dialog.open(updateComponent, {
            data: {}
        });
    }
    add_employee(name,apellido1,apellido2,cedula,correo,contrasena,dep,puesto,FechaN) {
        //Se debe almacenar la imagen primero
        this.fotoService.uploadFile(this.photo)
            .subscribe((data)=>{
                let photoHash = (data && data.hash)? data.hash : null;
                console.log(photoHash);
                this.restApi.setEmpleado(name,apellido1,apellido2,cedula,FechaN,correo,contrasena,dep,puesto,photoHash).subscribe(res => {
                    
                });
                //POner el resto de su codigo aqui adentro
                //Cuando se va usar el sp de agregar cliente, en el espacio de 
                //Foto utilizar la cariable photoHas.


                //
            });

        
    }

    onPhotoChange(event){
        this.photo = event.target.files[0];

        //this.pictures[idNumber-1].name = photoName;
    }
}