import { Component, OnInit, OnDestroy } from '@angular/core';
import {RestApiService} from 'src/app/rest_client/client_service';
import { Router } from "@angular/router";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent {
  
    constructor(public restApi: RestApiService, private router: Router){
        
     
    }

    login(username,password){
         //this.restApi.getProvincias(username);  
         this.router.navigate(['/auth/manage-assets']);
    }
}