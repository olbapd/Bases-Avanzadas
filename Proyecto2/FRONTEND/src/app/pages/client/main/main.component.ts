import { Component } from '@angular/core';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';
import { ClientService } from '../../../services/client.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'main',
  styleUrls: ['./main.component.scss'],
  templateUrl: './main.component.html',
})
export class MainComponent {
  
  clients:any;
  constructor(private clientServices:ClientService, 
    private router: Router) {
    this.clients=[
      {
        idCard: "ABCDEF",
        name: "der Name",
        birthdate : "21/03/1990",
        address: "Cartago",
        number: 3331324354,
        email: "user@gmail.com",
        type: "Regular",
        user: "UserName",
        photo: '../../../../assets/bookstore.png'

      },
    ]
  }

  editClient(user){
    console.log(user);
    localStorage.setItem("Client",JSON.stringify(user));
    this.router.navigate(['/pages/client/edit']);
  }
  deleteClient(user){
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
