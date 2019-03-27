import {Component, OnInit} from '@angular/core'
import { MatDialogRef } from '@angular/material';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RestApiService } from 'src/app/rest_client/client_service';
import { Router } from '@angular/router';
@Component({
    selector: 'update-employee',
    templateUrl: './update-employee.component.html',
    styleUrls: ['./update-employee.component.css']

})

export class updateComponent implements OnInit {
    constructor(private modalService: NgbModal, public restApi: RestApiService, 
        private router: Router,private dialogRef: MatDialogRef<updateComponent>){}
    ngOnInit(){}

    onNoClick(): void {
        this.dialogRef.close();
       }
}