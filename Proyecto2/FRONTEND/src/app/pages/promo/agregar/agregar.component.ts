import { Component } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { FormBuilder, AbstractControl,Validators, FormGroup } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { PromoService } from '../../../services/promo.service';
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
  bookstoreCode:any;

  constructor(private formBuilder: FormBuilder,
              private promoService:PromoService) {
    this.type = this.formBuilder.group({
      books: [null, Validators.required],
      name: [null, Validators.required],
      percent: [null, Validators.required],
      begin: [null, Validators.required],
      description: [null, Validators.required],
      end: [null, Validators.required],
      
      });
    this.bookstoreCode = JSON.parse(localStorage.getItem('StoreCode'));
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
 
  addNewPromo(){
    let percentage = parseInt(this.type.value.percent)/100;
    let books = this.type.value.books.split(";");
    let body={
      nombre:this.type.value.name ,
      descripcion:this.type.value.description,
      fechaInicio:this.type.value.begin,
      fechaFin:this.type.value.end,
      porcenDescuento:percentage,
      libro: books,
      libreria: this.bookstoreCode,
    }
    this.promoService.addPromo(body)
      .subscribe((result)=>{
         if(result.status){
           Swal(
             'Created Succesfully!',
             '',
             'success'
           )
         }
      })
  }


}