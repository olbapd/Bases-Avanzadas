import { Component } from '@angular/core';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';
import { BookService } from '../../../services/book.service';
import { AdminService } from '../../../services/admin.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'main',
  styleUrls: ['./main.component.scss'],
  templateUrl: './main.component.html',
})
export class MainComponent {
  
  books:any;
  bookstores:any;
  bookstoreCode:any;
  showSearch:any;
  defaultPhoto:any;
  show
  
  constructor(private bookService:BookService,
              private adminService:AdminService,
              private router: Router) {
    this.bookstores=[];
    this.bookstoreCode="";
    this.defaultPhoto="../../../../assets/book.png";
    this.showSearch=false;
    this.books=[];
    let user= JSON.parse( localStorage.getItem('user'));
    if(user.tipoUsuario==0){
      this.showSearch=true;
    }
    if(user.tipoUsuario==2){
      this.showSearch=true;
    }
    this.adminService.getBookstores()
      .subscribe((result)=>{
        if(result.status){
          for (var i = 0; i < result.data.length; ++i) {
            let temp =
            {
              code: result.data[i]._id,
              name: result.data[i].nombre,
            }
            this.bookstores.push(temp);
          }
        }
    })
    if(JSON.parse(localStorage.getItem("StoreCode"))!=null){
      this.bookstoreCode= JSON.parse(localStorage.getItem("StoreCode"));
      this.bookService.getBooks(this.bookstoreCode)
        .subscribe((result)=>{
          if(result.status){
            for (let i = 0; i < result.data.length; ++i) {
              if(result.data[i].foto==undefined || result.data[i].foto==""){
                result.data[i].foto=this.defaultPhoto;
              }
              let temp={
                photo: result.data[i].foto,
                issn: result.data[i]._id,
                name: result.data[i].nombre,
                category: result.data[i].tema.nombre,
                categoryId: result.data[i].tema._id,
                price: result.data[i].precio,
                description: result.data[i].descripcion,
                sales: result.data[i].cantidadVendida,
                amount: result.data[i].cantidadDisponible,
              }
              this.books.push(temp);
            }
          }
        })
    }
  }

  searchBookstore(code){
    this.books=[];
    this.bookstoreCode=code;
    this.bookService.getBooks(this.bookstoreCode)
        .subscribe((result)=>{
          if(result.status){
            for (let i = 0; i < result.data.length; ++i) {
              if(result.data[i].foto==undefined || result.data[i].foto==""){
                result.data[i].foto=this.defaultPhoto;
              }
              let temp={
                photo: result.data[i].foto,
                issn: result.data[i]._id,
                name: result.data[i].nombre,
                category: result.data[i].tema.nombre,
                price: result.data[i].precio,
                description: result.data[i].descripcion,
                sales: result.data[i].cantidadVendida,
                amount: result.data[i].cantidadDisponible,
              }
              this.books.push(temp);
            }
          }
        })
  }

  editBook(issn){
    let book={};
    for (let i = 0; i <this.books.length; ++i) {
      if(this.books[i].issn==issn){
        book=this.books[i];
      }
    }
    localStorage.setItem("Book",JSON.stringify(book));
    localStorage.setItem("StoreCode",JSON.stringify(this.bookstoreCode));
    this.router.navigate(['/pages/book/edit']);
  }
  deleteBook(issn,index){
    Swal({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.value) {
        this.bookService.deleteBook(issn)
          .subscribe((res)=>{
            if(res.status){
              this.books.splice(index,1);
              Swal(
                'Deleted!',
                'Book has been deleted.',
                'success'
              )
            }
          })
      }
    })
  }
}
