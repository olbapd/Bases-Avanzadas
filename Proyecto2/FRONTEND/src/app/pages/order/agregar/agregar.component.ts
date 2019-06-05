import { Component } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { FormBuilder, AbstractControl,Validators, FormGroup } from '@angular/forms';

import { CatalogService } from '../../../services/catalog.service';
import { BookService } from '../../../services/book.service';
import { PromoService } from '../../../services/promo.service';
import { OrderService } from '../../../services/order.service';
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
  user:any;

  constructor(private formBuilder: FormBuilder,
              private bookService: BookService,
              private catalogService: CatalogService,
              private orderService: OrderService,
              private promoService: PromoService) {
    this.type = this.formBuilder.group({
      bookstore: [null, Validators.required],
      books: [null, Validators.required],
      categories: [null, Validators.required],
      });
    
    this.user = JSON.parse(localStorage.getItem('user'));


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

  addOrder(){
    let cat = this.type.value.categories.split(";");
    let books = this.type.value.books.split(";");
    let d = new Date();
    let month = '-0' + (d.getMonth() + 1);
    let day = '-0' + d.getDate();
    let year = d.getFullYear();
    let currentDate=year+month+day;
    
    let body={
      cliente:this.user._id,
      tema:cat,
      libros:books,
      fechaPedido:currentDate,
      montoTotal:0,
      estado:false,
      libreria:this.type.value.bookstore,
    }

    this.promoService.getPromo()
    .subscribe((result)=>{
      if(result.status){
        let precios=[];
        let promos = result.data
        
        for (let i = 0; i < body.libros.length; ++i) {
          let temp =1
          let found=false
          for (let j = 0; j < promos.length; ++j) {
            if(promos[j].libreria == body.libreria){
              for (let k = 0; k < promos[j].libro.length; ++k) {
                 if(promos[j].libro[k] == body.libros[i]){
                   temp=promos[j].porcenDescuento
                   precios.push(temp)
                   found=true;
                   break
                 }
              }
            }
            if(found){
              break
            }
          }
          if(!found){
            precios.push(temp);
          }
        }

        console.log(precios);
        this.bookService.getBooks(body.libreria)
          .subscribe((result2)=>{
            if(result2.status){
              let total =0 ;
              let libros = result2.data;
              for (let i = 0; i < body.libros.length; ++i) {
                for (let k = 0; k < libros.length; ++k) {
                  if(libros[k]._id==body.libros[i]){
                    total=total+ (libros[k].precio*precios[i]);
                    console.log(total);
                    break;
                  }
                }
              }
              body.montoTotal=total;
              console.log(body);
              this.orderService.addOrders(body)
                .subscribe((result3)=>{
                  if(result3.status){
                    Swal(
                      'Created Ordered!',
                      '',
                      'success'
                    )
                  }
                });
            }
          })
      }

    })
  }
}