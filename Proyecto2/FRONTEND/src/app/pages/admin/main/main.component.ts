import { Component } from '@angular/core';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';
import { AdminService } from '../../../services/admin.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'main',
  styleUrls: ['./main.component.scss'],
  templateUrl: './main.component.html',
})
export class MainComponent {
  
  bookstores:any;
  defaultPhoto:any;
  constructor(private adminServices:AdminService,
              private router: Router) {
    this.bookstores=[];
    this.defaultPhoto="../../../../assets/bookstore.png";
    this.adminServices.getBookstores()
      .subscribe((result)=>{
        if(result.status){
          for (let i = 0; i < result.data.length; ++i) {
            if(result.data[i].foto==undefined){
              result.data[i].foto=this.defaultPhoto;
            }
            let temp =
            {
              code: result.data[i]._id,
              name: result.data[i].nombre,
              country : result.data[i].pais.nombre,
              countryId : result.data[i].pais._id,
              location: result.data[i].ubicacion,
              number: result.data[i].telefono,
              schedule: result.data[i].horario,
              photo: result.data[i].foto
            }
            this.bookstores.push(temp);
          }
        }
    })
  }

  editBookstore(code){
    let store={};
    for (let i = 0; i <this.bookstores.length; ++i) {
      if(this.bookstores[i].code==code){
        store=this.bookstores[i];
      }
    }
    console.log(store);
    localStorage.setItem("Store",JSON.stringify(store));
    this.router.navigate(['/pages/admin/edit']);
  }
  viewBook(code){
    localStorage.setItem("StoreCode",JSON.stringify(code));
    this.router.navigate(['/pages/book/main']);
  }
  deleteBookstore(code,index){
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
        this.adminServices.deleteBookstore(code)
          .subscribe((res)=>{
            if(res.status){
              this.bookstores.splice(index,1);
              Swal(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )      
            }
          })
      }
    })
  }
}
