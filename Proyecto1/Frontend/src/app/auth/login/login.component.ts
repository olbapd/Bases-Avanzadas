import { Component, OnInit, OnDestroy } from '@angular/core';
import {RestApiService} from 'src/app/rest_client/client_service';
import { Router } from "@angular/router";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent {
  
    constructor(public restApi: RestApiService, private router: Router){ //Router: para poder pasar de ventanas
        
    }

    login(username,password){
         if (this.restApi.getSate(username,password)){
            this.router.navigate(['./admin_view/admin']); //ruta a admin si el login es exitoso
         }; 
         
    }
}