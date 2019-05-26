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


  viewOrder(id){

  }
  deliverOrder(id){
    Swal({
      title: 'Want to deliver this order?',
      text: "You won't be able to revert this!",
      type: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, deliver!'
    }).then((result) => {
      if (result.value) {
        let body={
          estado:true
        };
        this.orderService.deliverOrder(id,body)
          .subscribe((res)=>{
            if(res.status){
              this.searchBookstore(this.bookstoreCode);
              Swal(
                'Delevired!',
                'The order will be delivered as soon as possible.',
                'success'
              )
            }
          })
      }
    })
  }
}
