import { Component } from '@angular/core';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';
import { BookService } from '../../../services/book.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'main',
  styleUrls: ['./main.component.scss'],
  templateUrl: './main.component.html',
})
export class MainComponent {
  
  books:any;
  
  constructor(private bookServices:BookService,
              private router: Router) {
    this.books=[
      {
        issn: "ABCDEF",
        name: "Libro X",
        category : "Terror",
        description: "Descripcion Libro",
        sales: 3331324354,
        amount: 3331324354,
        price: 456546,
        photo: '../../../../assets/book.png'

      },
    ]
  }

  editBook(code){

  }
  deleteBook(code){
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
        //Meter codigo para borrar
        Swal(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
  }
}
