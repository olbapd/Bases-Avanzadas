import { Component, OnInit, OnDestroy, Injectable } from '@angular/core';
import { RestApiService } from 'src/app/services/client_service';
import { Router } from "@angular/router";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MatDialog } from '@angular/material';
import { LoginFailedComponent } from '../dialogs/login_Failed/login_Failed.component';
@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
    isPopupOpened = false;

    constructor(private modalService: NgbModal, public restApi: RestApiService, private router: Router, private dialog: MatDialog) { //Router: para poder pasar de ventanas

    }
    ngOnInit() {
        localStorage.clear();
    }

    login(username, password) {

        this.restApi.getSate(username, password).subscribe((res) => {
            const myObjStr = JSON.stringify(res)
            const json = JSON.parse(myObjStr);


            if (json.success == true) {
                localStorage.setItem('IdEmpleado', json.data.IdEmpleado);
                localStorage.setItem('IdPuesto', json.data.IdPuesto);
                this.restApi.getSedeXEmpleado(json.data.IdEmpleado).subscribe((res) => {
                    const myObjStr = JSON.stringify(res)
                    const json = JSON.parse(myObjStr);
                    localStorage.setItem('IdSede', json.data[0].IdSede);
                });
                if ((json.data.IdPuesto) == 2) {
                    this.router.navigate(['./admin_view/admin-dashboard']); //ruta a admin si el login es exitoso

                }
                else if ((json.data.IdPuesto) == 7) {
                    this.router.navigate(['./manager_view/manager-dashboard']); //ruta a admin si el login es exitoso

                }
                else {
                    this.router.navigate(['../employee']);
                }

            }
            else {
                this.isPopupOpened = true;
                const dialogRef = this.dialog.open(LoginFailedComponent, {
                    data: {}

                });


            }

        });;

    }

    /*  showPassword(){
         let input = document.getElementById('passwordtype');
         input.toggleAttribute('type');
     }
 
     hidePassword(){
         let input = document.getElementById('passwordtype');
         input.setAttribute('type','password');
     } */

}