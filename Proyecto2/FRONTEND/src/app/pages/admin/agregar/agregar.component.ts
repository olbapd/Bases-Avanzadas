import { Component } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { FormBuilder, AbstractControl,Validators, FormGroup } from '@angular/forms';
import { AdminService } from '../../../services/admin.service';
import { CatalogService } from '../../../services/catalog.service';
import Swal from 'sweetalert2';

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
              private adminService: AdminService,
              private catalogService: CatalogService) {
    this.type = this.formBuilder.group({
      code: [null, Validators.required],
      name: [null, Validators.required],
      country: [null, Validators.required],
      phone: [null, Validators.required],
      address: [null, Validators.required],
      openHours: [null, Validators.required],
      
    });
    this.catalogService.getCountries()
      .subscribe((result)=>{
          if(result.status){
            this.countries = result.data;
          }
      })
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
    
    
    let body={
        codigo: this.type.value.code,
        nombre: this.type.value.name,
        pais: this.country,
        ubicacion: this.type.value.address,
        telefono: this.type.value.phone,
        horario: this.type.value.openHours      
    }
    this.adminService.addBookstore(body)
      .subscribe( (result)=>{
        if(result.status){
          Swal(
            'Added Succesfully!',
            '',
            'success'
          )
        }
      });
  }
}