import { Component } from '@angular/core';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';
import { AdminService } from '../../../services/admin.service';
import { OrderService } from '../../../services/order.service';
import { CatalogService } from '../../../services/catalog.service';
import { LocalDataSource } from 'ng2-smart-table';

import Swal from 'sweetalert2';

@Component({
  selector: 'view',
  styleUrls: ['./view.component.scss'],
  templateUrl: './view.component.html',
})
export class ViewComponent {
  settings = {
    actions: {
      add: false,
      edit:false,
      delete:false
    },
    columns: {
      issn: {
        title: 'ISSN',
        type: 'string',
      },
      date: {
        title: 'Date',
        type: 'string',
      },
      category: {
        title: 'Categories',
        type: 'string',
      },
      delivered: {
        title: 'Delivered',
        type: 'string',
      }
    },
  };

  source: LocalDataSource = new LocalDataSource();
  defaultPhoto:any;
  books:any;
  min:any;
  max:any;
  categories:any;
  constructor(private adminService:AdminService,
              private catalogService:CatalogService,
              private orderService:OrderService,
              private router: Router) {
    this.books=[];
    this.min="";
    this.max="";
    this.categories=[];
    let user= JSON.parse( localStorage.getItem('user'));
    this.catalogService.getCategories()
      .subscribe((result)=>{
        if(result.status){
          this.categories = result.data;
            this.orderService.getOrdersByClient(user._id)
              .subscribe((result2)=>{
                if(result2.status){
                  for (let i = 0; i < result2.data.length; ++i) {
                    let temp={
                      issn: result2.data[i].libros,
                      delivered: result2.data[i].estado,
                      date: result2.data[i].fechaPedido,
                      category: result2.data[i].tema, 
                    }
                    let cat="";                
                    for (let j = 0; j < temp.category.length; ++j) {
                      for (let k = 0; k < this.categories.length; ++k) {
                        if(temp.category[j] == this.categories[k]._id){
                          cat=cat+this.categories[k].nombre+" "
                        }
                      }
                    }
                    temp.category= cat;
                    this.source.append(temp);
                  }
                }
              })
        }
      })       
  }
}
