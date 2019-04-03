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
    submitted = false;
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
    constructor(private fb: FormBuilder,
        private modalService: NgbModal,
        public restApi: RestApiService,
        private router: Router,
        private http: HttpClient,
        private dialog: MatDialog,
        private fotoService: FotoService) {
        this.photo="";

    }
    get employees(): Empleado[] { //BIND TABLE
        
        return this.empleados
        .map((empleados, i) => ({ id: i + 1, ...empleados}))
        .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
    }
    get f() { return this.form.controls; }
    ngOnInit() {
        this.form = new FormGroup({
           Nombre: new FormControl('Kenneth', Validators.required),
           Apellido1: new FormControl('Alvarado', Validators.required),
           Apellido2: new FormControl('Mendez', Validators.required),
           Cedula: new FormControl('20202020', Validators.required),
           Correo: new FormControl('pol@gmail.com', [Validators.required, Validators.email]),
           Contrasena: new FormControl('alavarado', [Validators.required, Validators.minLength(8),Validators.maxLength(10)]),
           FechaN: new FormControl('1996-12-12', Validators.required),
           Departamento: new FormControl('', Validators.required),
           Puesto: new FormControl('', Validators.required),
           FechaR: new FormControl('2019-04-03', Validators.required),


        });
       this.Remployees();
       this.dep_DropDown();
       this.puesto_DropDown();
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
        let FechaR = this.form.get('FechaR').value;

        // stop here if form is invalid
        if (this.form.invalid) {
            return;
        }
        else{
        let btn = document.getElementById('registrar_btn');
        //Se debe almacenar la imagen primero
        this.fotoService.uploadFile(this.photo)
        .subscribe((data)=>{
            let photoHash = (data && data.hash)? data.hash : null;
            console.log(photoHash);
                this.restApi.setEmpleado(nombre,apellido1,apellido2,cedula,FechaN,FechaR,correo,contrasena,departamento,puesto,photoHash).subscribe(res => {
                    
                    });  
        });

        }
    }
  
    dep_DropDown(){
        let option;
        let dropdowndep = document.getElementById('dep-Dropdown');
        this.restApi.getDepartamento().subscribe((res)=>{
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

    puesto_DropDown(){
        let option;
        let dropdowndep = document.getElementById('puesto-Dropdown');
        this.restApi.getPuesto().subscribe((res)=>{
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
                 console.log(this.empleados);
                 
             });
         });
        
    }
    onFileSelected(event) {
        this.selectedFile = <File>event.target.files[0];
    }

    onUpload() {
        const fd = new FormData();
        fd.append('image', this.selectedFile, this.selectedFile.name);
        this.http.post('http://localhost:300', fd).subscribe(res => {
            console.log(res);
        });

    }
    
    deleteEmployee(id) {
        const employee = this.empleados.findIndex(c=> c.cedula=== id);
        localStorage.setItem('Cedula',id);
        this.isPopupOpened = true;
        const dialogRef = this.dialog.open(DeleteComponent, {
            data: {}
        });
        if(localStorage.getItem("succesful")=="true"){
            this.empleados.splice(employee,1);
        }
        
    }

    
    updateEmployee() {
        this.isPopupOpened = true;
        const dialogRef = this.dialog.open(updateComponent, {
            data: {}
        });
    }

    onPhotoChange(event){
        this.photo = event.target.files[0];

        //this.pictures[idNumber-1].name = photoName;
    }
}