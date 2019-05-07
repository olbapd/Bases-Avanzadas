import { Component } from '@angular/core';

import { BookService } from '../../../services/book.service';

@Component({
  selector: 'main',
  styleUrls: ['./main.component.scss'],
  templateUrl: './main.component.html',
})
export class MainComponent {
  
  books:any;
  
  constructor(private bookServices:BookService) {
    this.books=[
      {
        issn: "ABCDEF",
        name: "Libro X",
        category : "Terror",
        description: "Descripcion Libro",
        sales: 3331324354,
        amount: 3331324354,
        price: 456546,
        photo: '../../../../assets/bookstore.png'

      },
    ]
  }

  editBook(code){

  }
  deleteBook(code){

  }
}
