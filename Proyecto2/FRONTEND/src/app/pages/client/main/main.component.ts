import { Component } from '@angular/core';

import { ClientService } from '../../../services/client.service';

@Component({
  selector: 'main',
  styleUrls: ['./main.component.scss'],
  templateUrl: './main.component.html',
})
export class MainComponent {
  
  clients:any;
  constructor(private clientServices:ClientService) {
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

  editClient(code){

  }
  deleteClient(code){

  }
}
