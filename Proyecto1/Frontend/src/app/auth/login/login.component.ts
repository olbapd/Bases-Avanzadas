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
         this.restApi.getProvincias(username);  
    }
}