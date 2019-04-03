import {Component, OnInit} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RestApiService } from 'src/app/services/client_service';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material';
import { updateComponent } from '../update_employee/update-employee.component';

@Component ({
selector:'delete-confirm',
templateUrl:'./delete_confirm.component.html',
styleUrls:['./delete_confirm.component.css']
})
export class DeleteComponent implements OnInit{
    constructor(private modalService: NgbModal, public restApi: RestApiService, 
        private router: Router,private dialogRef: MatDialogRef<updateComponent>){}
    ngOnInit(){}
    onNoClick(): void {
        this.dialogRef.close();
       }
 delteConfirm(){
     let cedula = localStorage.getItem('Cedula');
     localStorage.removeItem('Cedula');

     this.restApi.quitarEmpleado(cedula).subscribe(res => {      
    }); 

    localStorage.setItem('succesful',"true");
 }
}