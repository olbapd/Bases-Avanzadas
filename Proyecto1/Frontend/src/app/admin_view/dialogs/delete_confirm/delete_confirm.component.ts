import {Component, OnInit, Inject} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RestApiService } from 'src/app/services/client_service';
import { Router } from '@angular/router';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { updateComponent } from '../update_employee/update-employee.component';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Component ({
selector:'delete-confirm',
templateUrl:'./delete_confirm.component.html',
styleUrls:['./delete_confirm.component.css']
})
export class DeleteComponent implements OnInit{
    constructor(private modalService: NgbModal, public restApi: RestApiService, 
        private router: Router,private dialogRef: MatDialogRef<updateComponent>, @Inject(MAT_DIALOG_DATA) public data: any){

        }
    ngOnInit(){}
    onNoClick(): void {
        this.dialogRef.close({data:'false'});
       }
    confirmDelete(){
     let cedula = localStorage.getItem('Cedula');
     this.restApi.quitarEmpleado(cedula).subscribe(res => {      
    }); 
    this.dialogRef.close({data:'true'});
 }
}