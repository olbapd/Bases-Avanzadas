import { Component, OnInit, Inject } from '@angular/core'
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RestApiService } from 'src/app/services/client_service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, AbstractControl, Validators, FormControl } from '@angular/forms';
import { FotoService } from 'src/app/services/foto.service';
import { formatDate } from '@angular/common';
@Component({
    selector: 'update-employee',
    templateUrl: './update-employee.component.html',
    styleUrls: ['./update-employee.component.css']

})


export class updateComponent implements OnInit {
    isPopupOpened = false;
    submitted = false;
    form: FormGroup;
    submitted2 = false;
    form2: FormGroup;
    photo: any;
    photoHash: string;
    constructor(private modalService: NgbModal, public restApi: RestApiService,
        private router: Router, private dialogRef: MatDialogRef<updateComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private fotoService: FotoService) {
        this.photo = "";
    }
    ngOnInit() {
        this.form = new FormGroup({
            CorreoP: new FormControl(this.data.Correo, [Validators.required, Validators.email]),
            ContrasenaP: new FormControl(this.data.Contrasena, [Validators.required, Validators.maxLength(10)])
        });

        this.form2 = new FormGroup({
            Departamento: new FormControl(this.data.IdDepartamento, Validators.required),
            Puesto: new FormControl(this.data.IdPuesto, Validators.required),
            Sede: new FormControl(this.data.IdSede, Validators.required),
        });
        let img_load = document.getElementById('imgUPManager');
        this.photoHash = this.data.Foto;
        let photo_load = this.fotoService.downloadFile(this.data.Foto);
        img_load.setAttribute('src', photo_load);

        this.dep_DropDown();
        this.puesto_DropDown();
        this.sedes_DropDown();
    }

    onNoClick(): void {
        this.dialogRef.close();
    }
    get f() { return this.form.controls; }
    get f2() { return this.form2.controls; }
    onSubmit() {
        this.submitted = true;
        let correo = this.form.get('CorreoP').value;
        let contrasena = this.form.get('ContrasenaP').value;

        // stop here if form is invalid
        if (this.form.invalid) {
            return;
        }
        else {
            let Cedula = this.data.Cedula;
            this.restApi.updateEmpleadoInfo(Cedula, correo, contrasena, this.photoHash).subscribe(res => {
                window.location.reload();
            });

        }
    }


    onSubmit2() {
        this.submitted2 = true;
        let departamento = this.form2.get('Departamento').value;
        let puesto = this.form2.get('Puesto').value;
        let IdSede = this.form2.get('Sede').value;
        // stop here if form is invalid
        if (this.form2.invalid) {
            return;
        }
        else {

            let Cedula = this.data.Cedula;
            let FechaActual = formatDate(new Date(), 'yyyy-MM-dd', 'en');

            this.restApi.cambioEmpleado(Cedula, departamento, puesto, IdSede, FechaActual, FechaActual).subscribe(res => {
                window.location.reload();

            });

        }
    }
    dep_DropDown() {
        let option;
        let dropdowndep = document.getElementById('dep1-Dropdown');
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
        let dropdowndep = document.getElementById('puesto1-Dropdown');
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

    sedes_DropDown() {
        let option;
        let dropdowndep = document.getElementById('sedes-Dropdown');
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
    onPhotoChange(event) {
        this.photo = event.target.files[0];
        this.fotoService.uploadFile(this.photo)
            .subscribe((data) => {
                let photoHashN = (data && data.hash) ? data.hash : null;
                let img_load = document.getElementById('imgUPManager');
                let photo_load = this.fotoService.downloadFile(photoHashN);
                img_load.setAttribute('src', photo_load);
                this.photoHash = photoHashN;
            });


        //this.pictures[idNumber-1].name = photoName;
    }
}