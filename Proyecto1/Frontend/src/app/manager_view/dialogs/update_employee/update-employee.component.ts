import {Component, OnInit, Inject} from '@angular/core'
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RestApiService } from 'src/app/services/client_service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, AbstractControl, Validators, FormControl } from '@angular/forms';
import { FotoService } from 'src/app/services/foto.service';
@Component({
    selector: 'update-employee',
    templateUrl: './update-employee.component.html',
    styleUrls: ['./update-employee.component.css']

})

  
export class updateComponent implements OnInit {
    isPopupOpened = false;
    submitted = false;
    form: FormGroup;
    photo: any;
    constructor(private modalService: NgbModal, public restApi: RestApiService, 
        private router: Router,private dialogRef: MatDialogRef<updateComponent>,@Inject(MAT_DIALOG_DATA) public data: any,private fotoService: FotoService){
            this.photo="";
        }
    ngOnInit(){
        this.form = new FormGroup({
            Departamento: new FormControl('', Validators.required),
            Puesto: new FormControl('', Validators.required),
            FechaR: new FormControl('', Validators.required),
           /*  Sede: new FormControl('', Validators.required), */
            CorreoP: new FormControl('', [Validators.required, Validators.email]),
            ContrasenaP: new FormControl('', [Validators.required, Validators.minLength(8),Validators.maxLength(10)])
         });
        this.dep_DropDown();
        this.puesto_DropDown();
        this. sedes_DropDown();
    }

    onNoClick(): void {
        this.dialogRef.close();
       }
    get f() { return this.form.controls; }
    onSubmit() {
        this.submitted = true;
        let departamento = this.form.get('Departamento').value;
        let puesto = this.form.get('Puesto').value;
        let fechar = this.form.get('FechaR').value;
        let correo = this.form.get('CorreoP').value;
        let contrasena = this.form.get('ContrasenaP').value;
       
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
            let idEmpleado:number=parseInt(localStorage.getItem('IdEmpleado'));
          this.restApi.getSedeXEmpleado(idEmpleado).subscribe((res)=>{
            const myObjStr = JSON.stringify(res)
               const json = JSON.parse(myObjStr);
               let IdSede=json.data[0].IdSede;
               let Cedula = localStorage.getItem('Cedula');
               this.restApi.updateEmpleado(Cedula,correo,contrasena,photoHash,departamento,puesto,IdSede,fechar).subscribe(res => {
                window.location.reload();
                    
            }); 
                                
           });
                 
        });

        }
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

    sedes_DropDown(){
        let option;
        let dropdowndep = document.getElementById('sedes-Dropdown');
        this.restApi.getSedes().subscribe((res)=>{
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
    onPhotoChange(event){
        this.photo = event.target.files[0];

        //this.pictures[idNumber-1].name = photoName;
    }
}