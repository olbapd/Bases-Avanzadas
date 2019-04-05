import {Component, OnInit, Inject} from '@angular/core'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RestApiService } from 'src/app/services/client_service';
import { Router } from '@angular/router';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { updateComponent } from '../update_employee/update-employee.component';
@Component ({
    selector:'first-method',
    templateUrl:'./first-method.component.html',
    styleUrls:['./first-method.component.css']
    })

export class FirstMethodComponent implements OnInit{


    empleados = [];//debe de inicializarse de lo contrario muestra vacio

    constructor(private modalService: NgbModal, public restApi: RestApiService, 
        private router: Router,private dialogRef: MatDialogRef<updateComponent>, @Inject(MAT_DIALOG_DATA) public data: any){

        }
    ngOnInit() {}

    onNoClick(): void {
        this.dialogRef.close({data:'false'});
       }



}