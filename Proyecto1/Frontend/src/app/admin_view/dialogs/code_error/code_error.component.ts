import {Component, OnInit} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MatDialogRef } from '@angular/material';

@Component ({
selector:'code_error',
templateUrl:'./code_error.component.html',
styleUrls:['./code_error.component.css']
})
export class CodeErrorComponent implements OnInit{
    constructor(private modalService: NgbModal,private dialogRef: MatDialogRef<CodeErrorComponent>){}
    ngOnInit(){}
    onNoClick(): void {
        this.dialogRef.close();
       }
}