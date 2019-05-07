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
  
  libraries:any;
  constructor(private adminServices:AdminService,
              private router: Router) {
    this.libraries=[
      {
        code: "ABCDEF",
        name: "Pancho Library",
        country : "Costa Rica",
        location: "Cartago",
        number: 3331324354,
        schedule: "L-V",
        photo: '../../../../assets/bookstore.png'
      }
    ]
  }

  editLibrary(code){
    
  }
  deleteLibrary(code){
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
