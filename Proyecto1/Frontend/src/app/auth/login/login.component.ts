import { Component, OnInit, OnDestroy } from '@angular/core';
import {RestApiService} from 'src/app/rest_client/client_service';
import { Router } from "@angular/router";
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { MatDialog } from '@angular/material';
import  {LoginFailedComponent} from '../dialogs/login_Failed/login_Failed.component';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
    isPopupOpened = false;
  
    constructor(private modalService:NgbModal, public restApi: RestApiService, private router: Router, private dialog: MatDialog){ //Router: para poder pasar de ventanas
        
    }
    ngOnInit() { 
    }

    login(username,password){
        
        this.restApi.getSate(username,password).subscribe((res)=>{
            const myObjStr = JSON.stringify(res)
            const json = JSON.parse(myObjStr);
            if (json.success==true){
               this.router.navigate(['./admin_view/admin']); //ruta a admin si el login es exitoso
            }
            else{
               this.isPopupOpened = true;
               const dialogRef = this.dialog.open(LoginFailedComponent, {
                   data: {}
               
               });
   
   
            }
   
           });;
        
         
    }
}