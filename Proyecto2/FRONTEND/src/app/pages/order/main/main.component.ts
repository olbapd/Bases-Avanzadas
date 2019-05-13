import { Component } from '@angular/core';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';
import { OrderService } from '../../../services/order.service';
import { AdminService } from '../../../services/admin.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'main',
  styleUrls: ['./main.component.scss'],
  templateUrl: './main.component.html',
})
export class MainComponent {
  
  libraries:any;
  orders:any;
  bookstoreCode:any;
  showSearch:any;
  bookstores:any;

  constructor(private orderService:OrderService,
              private adminService:AdminService,) {
    this.bookstoreCode=JSON.parse(localStorage.getItem("StoreCode"));
    this.bookstores=[];
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
    this.orderService.getOrders(this.bookstoreCode)
      .subscribe((result)=>{
        if(result.status){
           this.orders=result.data;
        }
      })
  }

  searchBookstore(code){
    this.orders=[];
    this.bookstoreCode=code;
    this.orderService.getOrders(this.bookstoreCode)
      .subscribe((result)=>{
        if(result.status){
           this.orders=result.data;
        }
      })
  }

  editPromo(code){

  }
}
