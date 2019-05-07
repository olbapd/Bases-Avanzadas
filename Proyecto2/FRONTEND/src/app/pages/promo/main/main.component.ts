import { Component } from '@angular/core';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';
import { PromoService } from '../../../services/promo.service';
import Swal from 'sweetalert2';

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

  editPromo(code){

  }
  deletePromo(code){
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
