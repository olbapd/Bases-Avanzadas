import { Component } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { FormBuilder, AbstractControl,Validators, FormGroup } from '@angular/forms';
import { AdminService } from '../../../services/admin.service';
import { CatalogService } from '../../../services/catalog.service';
import Swal from 'sweetalert2';

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
  countrySelect:any;

  constructor(private formBuilder: FormBuilder,
              private adminService: AdminService,
              private catalogService: CatalogService) {

    this.type = this.formBuilder.group({
      name: [null, Validators.required],
      phone: [null, Validators.required],
      address: [null, Validators.required],
      openHours: [null, Validators.required],
    });

     let temp={
      code: "JF0001",
      country: '5cd6354e3f03ab133a19257c',
      location: "Cartago-TEC",
      name: "Jose FIgueres Ferrer",
      number: "25744035",
      photo: "../../../../assets/bookstore.png",
      schedule: "L a V: 7:30am-5:00pm"
    }

    //let temp = JSON.parse(localStorage.getItem('Store'));
    this.type.get('name').setValue(temp.name);
    this.type.get('phone').setValue(temp.number);
    this.type.get('address').setValue(temp.location);
    this.type.get('openHours').setValue(temp.schedule);
    this.code = temp.code;

    this.catalogService.getCountries()
      .subscribe((result)=>{
          if(result.status){
            this.countries = result.data;
            this.countrySelect = temp.country;
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

  upBookStore(){

    let body={
      nombre: this.type.value.name,
      pais_id: this.countrySelect,
      telefono: this.type.value.phone,
      ubicacion: this.type.value.address,
      horario: this.type.value.openHours,
    }

    this.adminService.editBookstore(body,this.code)
      .subscribe((result)=>{
        if(result.status){
          Swal(
            'Modified Succesfully!',
            '',
            'success'
          )
        }
      });

  }

}