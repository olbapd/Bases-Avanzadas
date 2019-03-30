import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RestApiService } from 'src/app/rest_client/client_service';
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
    empleados: Empleado[] = [{
        name: "asd",
        estado: "asd",
        sede: "asd",
        departamente: "asd",
        puesto: "asd",
    }]

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
    empleado: Empleado;
    form: FormGroup;



    get assets(): asset[] {
        return this.activos
            .map((country, i) => ({ id: i + 1, ...country }))
            .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
    }

    get employees(): Empleado[] {
        return this.empleados
            .map((country, i) => ({ id: i + 1, ...country }))
            .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
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
            lastName: new FormControl('', Validators.required)

        });
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
    add_employee(name, estado, sede, dep, puesto, fecha_ingreso) {
        //Se debe almacenar la imagen primero
        this.fotoService.uploadFile(this.photo)
            .subscribe((data)=>{
                let photoHash = (data && data.hash)? data.hash : null;
                console.log(photoHash);
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