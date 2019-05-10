import { Component } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { FormBuilder, AbstractControl,Validators, FormGroup } from '@angular/forms';
import { AdminService } from '../../../services/admin.service';

@Component({
  selector: 'agregar',
  styleUrls: ['./agregar.component.scss'],
  templateUrl: './agregar.component.html',
})


export class AgregarComponent {
  type : FormGroup;
  validTextType: boolean = false;
  validNumberType: boolean = false;
  countries:any;
  country:any;

  constructor(private formBuilder: FormBuilder,
              private adminService: AdminService) {
    this.type = this.formBuilder.group({
      code: [null, Validators.required],
      name: [null, Validators.required],
      country: [null, Validators.required],
      phone: [null, Validators.required],
      address: [null, Validators.required],
      openHours: [null, Validators.required],
      
    });
    this.countries= [
      {
        Id:1,
        Name:"USA"
      },{
        Id:2,
        Name:"Spain"
      },{
        Id:3,
        Name:"France"
      }
    ]
  }
  validateAllFormFields(formGroup: FormGroup) {
      Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      }
      else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }
  isFieldValid(form: FormGroup, field: string) {
    return !form.get(field).valid && form.get(field).touched;
  }

  textValidationType(e){
    if (e) {
      this.validTextType = true;
    }
    else{
      this.validTextType = false;
    }
  }
  numberValidationType(e){
    if (e) {
      this.validNumberType = true;
    }else{
      this.validNumberType = false;
    }
  }
  addBookStore(){
    console.log(this.country);
    console.log(this.type.value.code);
    console.log(this.type.value.name);
    console.log(this.type.value.country);
    console.log(this.type.value.phone);
    console.log(this.type.value.address);
    console.log(this.type.value.openHours);
    
    let body={
        codigo: this.type.value.code,
        nombre: this.type.value.name,
        pais: this.country,
        ubicacion: this.type.value.address,
        telefono: this.type.value.phone,
        horario: this.type.value.openHours      
    }
    /*this.adminService.addLibrary(body)
      .subscribe( (result)=>{
         console.log(result.status);
      });*/
      console.log(body);
  }
}