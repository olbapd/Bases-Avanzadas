
import { Component } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { FormBuilder, AbstractControl,Validators, FormGroup } from '@angular/forms';

import { CatalogService } from '../../../services/catalog.service';
import { BookService } from '../../../services/book.service';
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
  categories:any;
  category:any;
  bookstoreCode:any;


  constructor(private formBuilder: FormBuilder,
              private bookService: BookService,
              private catalogService: CatalogService) {
    this.type = this.formBuilder.group({
      issn: [null, Validators.required],
      name: [null, Validators.required],
      category: [null, Validators.required],
      price: [null, Validators.required],
      description: [null, Validators.required],
      amount: [null, Validators.required],
      photo: [null, Validators.required],

      });
    this.bookstoreCode = JSON.parse(localStorage.getItem('StoreCode'));
     this.catalogService.getCategories()
       .subscribe((result)=>{
         if(result.status){
           this.categories=result.data;
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

  addNewBook(){
    let body={
      libro_id:this.type.value.issn,
      nombre:this.type.value.name,
      libreria_id:this.bookstoreCode,
      tema_id:this.category,
      descripcion:this.type.value.description,
      foto:"",
      precio:this.type.value.price,
      cantidadVendida:0,
      cantidadDisponible:this.type.value.amount,
      estado:"bueno",
    }

    this.bookService.addBook(body)
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