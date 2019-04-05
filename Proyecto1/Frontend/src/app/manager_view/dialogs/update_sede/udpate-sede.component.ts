import {Component, OnInit} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RestApiService } from 'src/app/services/client_service';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef } from '@angular/material';
import { updateComponent } from '../update_employee/update-employee.component';

@Component ({
    selector:'update-sede',
    templateUrl: './update-sede.component.html',
    styleUrls :['./update-sede.component.css']
})

export class UpdateSedeComponent implements OnInit {

    constructor(private modalService: NgbModal, public restApi: RestApiService, 
        private router: Router,private dialogRef: MatDialogRef<UpdateSedeComponent>){}
    ngOnInit(){}

    onNoClick(): void {
        this.dialogRef.close();
       }
}