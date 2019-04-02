import {Component, OnInit} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RestApiService } from 'src/app/services/client_service';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material';

@Component ({
selector:'login-failed',
templateUrl:'./login_Failed.component.html',
styleUrls:['./login_Failed.component.css']
})
export class LoginFailedComponent implements OnInit{
    constructor(private modalService: NgbModal, public restApi: RestApiService, 
        private router: Router,private dialogRef: MatDialogRef<LoginFailedComponent>){}
    ngOnInit(){}
    onNoClick(): void {
        this.dialogRef.close();
       }
}