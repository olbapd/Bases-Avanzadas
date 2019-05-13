import { Component } from '@angular/core';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';
import { PromoService } from '../../../services/promo.service';
import { AdminService } from '../../../services/admin.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'main',
  styleUrls: ['./main.component.scss'],
  templateUrl: './main.component.html',
})
export class MainComponent {
  
  bookstoreCode:any;
  promos:any;
  bookstores:any;
  showSearch:any;

  constructor(private promoService:PromoService,
              private adminService:AdminService, 
              private router: Router) {
    this.bookstores=[];
    this.bookstoreCode="";
    this.showSearch=false;
    let user= JSON.parse( localStorage.getItem('user'));
    if(user.tipoUsuario==0){
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
    this.promos=[
      {
        code: "ABCDEF",
        name: "Pancho ",
        description : "Descripcion Promocion",
        percent: "10%",
        begin: "01/01/19",
        end: "02/02/19",
        photo: '../../../../assets/bookstore.png'

      },
    ]
  }
  searchBookstore(code){
    this.bookstoreCode=code;
    //this.promos=[];
  }

  editPromo(code){
    console.log(code);
    localStorage.setItem("Promo",JSON.stringify(code));
    this.router.navigate(['/pages/promo/edit']);  
  }
  deletePromo(code,index){
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
        this.promoService.deletePromo(code)
          .subscribe((res)=>{
            this.promos.splice(index,1);
            Swal(
              'Deleted!',
              'Discount has been deleted.',
              'success'
            )    
          })
      }
    })
  }
}
