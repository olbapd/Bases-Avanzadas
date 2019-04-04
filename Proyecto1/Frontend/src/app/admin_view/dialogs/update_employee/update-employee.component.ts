import {Component, OnInit, Inject} from '@angular/core'
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RestApiService } from 'src/app/services/client_service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, AbstractControl, Validators, FormControl } from '@angular/forms';
@Component({
    selector: 'update-employee',
    templateUrl: './update-employee.component.html',
    styleUrls: ['./update-employee.component.css']

})

export class updateComponent implements OnInit {
    isPopupOpened = false;
    submitted = false;
    form: FormGroup;
    constructor(private modalService: NgbModal, public restApi: RestApiService, 
        private router: Router,private dialogRef: MatDialogRef<updateComponent>,@Inject(MAT_DIALOG_DATA) public data: any){}
    ngOnInit(){
        this.form = new FormGroup({
            Departamento: new FormControl('', Validators.required),
            Puesto: new FormControl('', Validators.required)
         });
        this.dep_DropDown();
        this.puesto_DropDown();
    }

    onNoClick(): void {
        this.dialogRef.close();
       }
    get f() { return this.form.controls; }
    onSubmit() {
        this.submitted = true;
        let departamento = this.form.get('Departamento').value;
        let puesto = this.form.get('Puesto').value;
        // stop here if form is invalid
        if (this.form.invalid) {
            return;
        }
      /*   else{
        let btn = document.getElementById('registrar_btn');
        //Se debe almacenar la imagen primero
        this.fotoService.uploadFile(this.photo)
        .subscribe((data)=>{
            let photoHash = (data && data.hash)? data.hash : null;
            console.log(photoHash);
                this.restApi.setEmpleado(nombre,apellido1,apellido2,cedula,FechaN,FechaR,correo,contrasena,departamento,puesto,photoHash).subscribe(res => {
                    
                    });  
        });

        } */
    }
    dep_DropDown(){
        let option;
        let dropdowndep = document.getElementById('dep1-Dropdown');
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
        console.log("esaaaa");
        let option;
        let dropdowndep = document.getElementById('puesto1-Dropdown');
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
}