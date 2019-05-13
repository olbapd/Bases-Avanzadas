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
  constructor(private clientService:ClientService, 
              private router: Router) {
    this.clients=[];
    this.clientService.getClients()
      .subscribe((result)=>{
        if(result.status){
          console.log(result.data);
          for (let i = 0; i < result.data.length; ++i) {
            if(result.data[i].tipoUsuario==2){
              let date = new Date(result.data[i].fechaNacimiento);
              let date2 = date.getFullYear()+ "-" +
                    (date.getMonth() + 1) + "-" +
                    date.getDate() 
              let temp={
                idCard: result.data[i]._id, 
                name: result.data[i].nombre , 
                birthdate : date2, 
                address: result.data[i].lugar , 
                number: result.data[i].telPrincipal , 
                email: result.data[i].correo , 
                type: result.data[i].tipoUsuario , 
                user: result.data[i].usuario,
              }
              this.clients.push(temp);
            }
          }
        }
      })
  }
}
