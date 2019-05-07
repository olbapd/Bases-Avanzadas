import { Component } from '@angular/core';

import { PromoService } from '../../../services/promo.service';

@Component({
  selector: 'main',
  styleUrls: ['./main.component.scss'],
  templateUrl: './main.component.html',
})
export class MainComponent {
  
  promos:any;
  constructor(private promoServices:PromoService) {
    this.promos=[
      {
        code: "ABCDEF",
        name: "Pancho Promocion",
        description : "Descripcion Promocion",
        percent: "10%",
        begin: "01/01/19",
        end: "02/02/19",
        photo: '../../../../assets/bookstore.png'

      },
    ]
  }

  editLibrary(code){

  }
  deleteLibrary(code){

  }
}
