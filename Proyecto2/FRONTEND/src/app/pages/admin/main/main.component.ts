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
  constructor(private adminServices:AdminService,
              private router: Router) {
    this.bookstores=[];
    /*this.bookstores=this.adminServices.getBookstores()
      .subscribe((result)=>{
        if(result.status){
          for (var i = 0; i < result.data.length; ++i) {
            let temp =
            {
              code: result.data[i]._id,
              name: result.data[i].nombre,
              country : result.data[i].pais,
              location: result.data[i].ubicacion,
              number: result.data[i].telefono,
              schedule: result.data[i].horario,
              photo: result.data[i].foto
            }
            this.bookstores.push(temp);
          }
        }
      })*/
    let librerias= this.adminServices.testGetBookstores();
    console.log(librerias);
    for (let i = 0; i < librerias.length; ++i) {
      let temp =
      {
        code: librerias[i]._id,
        name: librerias[i].nombre,
        country : librerias[i].pais,
        location: librerias[i].ubicacion,
        number: librerias[i].telefono,
        schedule: librerias[i].horario,
        photo: librerias[i].foto
      }
      this.bookstores.push(temp);
    }
  }

  editBookstore(code){
    console.log(code);
    let store={};
    for (let i = 0; i <this.bookstores.length; ++i) {
      if(this.bookstores[i].code==code){
        store=this.bookstores[i];
      }
    }
    localStorage.setItem("Store",JSON.stringify(store));
    this.router.navigate(['/pages/admin/edit']);
  }
  deleteBookstore(code){
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
