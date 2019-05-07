import { Component } from '@angular/core';

import { BookService } from '../../../services/book.service';

@Component({
  selector: 'main',
  styleUrls: ['./main.component.scss'],
  templateUrl: './main.component.html',
})
export class MainComponent {
  
  libraries:any;
  
  constructor(private bookServices:BookService) {
    this.libraries=[
      {
        code: "ABCDEF",
        name: "Pancho Library",
        country : "Costa Rica",
        location: "Cartago",
        number: 3331324354,
        schedule: "L-V",
        photo: '../../../../assets/bookstore.png'

      },
    ]
  }

  editLibrary(code){

  }
  deleteLibrary(code){

  }
}
