import { Component, OnInit, OnDestroy } from '@angular/core';
import {RestApiService} from 'src/app/rest_client/client_service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent {
  
    constructor(public restApi: RestApiService){
        
     
    }

    login(username,password){
        //let contact = new Contact(name,phone);
        //this.contacts.push(contact);
        //console.log('username is ' + username);
        //let a: string =
         this.restApi.getSate(username,password);
        //console.log('return is ' + a);
        
    }
}