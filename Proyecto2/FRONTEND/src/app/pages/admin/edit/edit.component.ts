import { Component } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { FormBuilder, AbstractControl,Validators, FormGroup } from '@angular/forms';
import { AdminService } from '../../../services/admin.service';
@Component({
  selector: 'edit',
  styleUrls: ['./edit.component.scss'],
  templateUrl: './edit.component.html',
})


export class EditComponent {
  type : FormGroup;
  validTextType: boolean = false;
  validNumberType: boolean = false;
  code="";
  countries:any;
  country:any;

  constructor(private formBuilder: FormBuilder,
              private adminServices: AdminService) {
    this.type = this.formBuilder.group({
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

    let temp = JSON.parse(localStorage.getItem('Store'));
    this.type.value.name = temp.nombre;
    this.type.value.country = temp.pais;
    this.type.value.phone = temp.telefono;
    this.type.value.address = temp.ubicacion;
    this.type.value.openHours = temp.horario;

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

  upBookStore(){
    console.log(this.type.value.name);
    console.log(this.country);
    console.log(this.type.value.phone);
    console.log(this.type.value.address);
    console.log(this.type.value.openHours);

    let body={
      nombre: this.type.value.name,
      pais: this.country,
      telefono: this.type.value.phone,
      ubicacion: this.type.value.address,
      horario: this.type.value.openHours,
    }

    /*this.adminServices.editBookstore(body)
      .subscribe((result)=>{
        console.log(result);
      });*/
      console.log(body);

  }

}